import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'low' | 'middle' | 'high'

export type AffairType = {
    _id: number,
    name: string,
    priority: string
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): any => {
    let newAffairsFilter = [];
    if (filter === 'all') return affairs
    else {
        switch (filter) {
            case "low":
                newAffairsFilter = affairs.filter(t => t.priority === filter)
                break;
            case "middle":
                newAffairsFilter = affairs.filter(t => t.priority === filter)
                break;
            case "high":
                newAffairsFilter = affairs.filter(t => t.priority === filter)
                break
        }
    }
    return newAffairsFilter
}

export const deleteAffair = (affairs: Array<AffairType>, _id: number): any => {
    return affairs.filter(t => t._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={(filter: FilterType)=> setFilter(filter)}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
