import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import { ArrowDown, DotSvg } from '../../../../assets'
import OptionsModal from '../modal';
import Job from './Job';
import { GandalfAppAPI } from '../../../../api';
import { JobProps } from '../../../../types';


interface JobApplicationProps {
    userId: number
}


export default function JobApplication({ userId }: JobApplicationProps) {

    //for changing status - pending/not hired/hired
    const [ modalVisible, setModalVisible ] = useState(false);
    function onStatusHandler(){
        setModalVisible(true)
    }


    //call for job application data
    const [ jobsState, setJobsState ] = useState<JobProps[]>([])
    async function getJobs(){
        try{
            const res: JobProps[] = await GandalfAppAPI.getJobApplication(userId);
            setJobsState(res)
            // console.log(res)

        } catch(err){
            console.log(err)
        }
        
    }

    useEffect(()=>{
        
        if(userId){
            getJobs();
        }

    },[userId])

    return (
        <View style={styles.job}>
            <Text style={styles.title}>Accepted Job Application</Text>
            {jobsState.map((item, index) => (
                <Job 
                    key={index}
                    id={item.id}
                    jobName={item.job.description}
                    projectName={item.job.project.name}
                    action={item.applicationStatus}
                    onStatusHandler={onStatusHandler}/>
            ))}

            <OptionsModal 
                modalVisible={modalVisible} 
                setModalVisible={setModalVisible}/>
        </View>
    )
}