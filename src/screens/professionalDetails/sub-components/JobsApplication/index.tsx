import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import { ArrowDown, DotSvg } from '../../../../assets'
import OptionsModal from '../modal';
import Job from './Job';
import { GandalfAppAPI } from '../../../../api';
import { JobProps } from '../../../../types';
import { useGandalfDispatch } from '../../../../hooks';
import { updateJobApplication } from '../../../../store/features/userSlice';


interface JobApplicationProps {
    userId: number,
    loader: boolean;
    setLoader: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function JobApplication({ userId, setLoader, loader }: JobApplicationProps) {

    //for changing status - pending/not hired/hired
    const [ modalVisible, setModalVisible ] = useState(false);
    function onStatusHandler(id: number){
        setJobSelectedState(id)
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

    const [ jobSelected, setJobSelectedState ] = useState(0)
    useEffect(()=>{
        
        if(userId){
            getJobs();
        }

    },[userId])


    //updating status
    const dispatch = useGandalfDispatch()
    async function updateJobApp(status: number){    
        try{
            setLoader(true)
            const body = { "id": jobSelected, "applicationStatus": status }
            const res = await dispatch(updateJobApplication( body ))  
            console.log(res, userId)
            setJobsState((e) => {
                e = e.map((item) => {
                    if(item.id === jobSelected){
                        return {
                            ...item,
                            applicationStatus: status
                        }
                    }
                    return item
                })

                return e;
            }) 

            setLoader(false)
            setModalVisible(false)
        } catch(e){
            
            setLoader(false)
            console.log(e)
            setModalVisible(false)
        }
    }

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
                    onStatusHandler={() => onStatusHandler(item.id)}/>
            ))}

            <OptionsModal 
                modalVisible={modalVisible} 
                setModalVisible={setModalVisible}
                updateJobApp={updateJobApp}
                loader={loader}/>
        </View>
    )
}