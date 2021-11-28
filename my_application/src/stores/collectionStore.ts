import {MainStore} from "./mainStore";
import {makeObservable,observable,action} from "mobx";
import {ICardProps} from "../components/card/card";
import poster0 from '../../src/assets/img/posters/abobusPoster.png'
import poster1 from '../../src/assets/img/posters/midsomamr.png'
import poster2 from '../../src/assets/img/posters/mank.png'
import poster3 from '../../src/assets/img/posters/girl.png'
import poster4 from '../../src/assets/img/posters/nomadland.png'
import poster5 from '../../src/assets/img/posters/father.png'
import poster6 from '../../src/assets/img/posters/drunk.png'
import poster7 from '../../src/assets/img/posters/soul.png'
import poster8 from '../../src/assets/img/posters/godzilla.png'


const collectionMock:ICardProps[] = [
    {
        title:'Amogus',
        rate:'6.9',
        posterImgUrl:poster0
    },
    {
        title:'Солнцестояние',
        rate:'6.6',
        posterImgUrl:poster1
    },
    {
        title:'Манк',
        rate:'7.1',
        posterImgUrl:poster2
    },
    {
        title:'Девушка, пода...',
        rate:'6.8',
        posterImgUrl:poster3
    },
    {
        title:'Земля кочевников',
        rate:'7.3',
        posterImgUrl:poster4
    },
    {
        title:'Отец',
        rate:'7.9',
        posterImgUrl:poster5
    },
    {
        title:'Еще по одной',
        rate:'7.5',
        posterImgUrl:poster6
    },
    {
        title:'Душа',
        rate:'8.3',
        posterImgUrl:poster7
    },
    {
        title:'Годзилла',
        rate:'6.1',
        posterImgUrl:poster8
    },
]
export default class collectionStore {
    collection: ICardProps[]

    constructor(public mainStore:MainStore) {
        makeObservable(this,{
            collection:observable,
        })

        this.collection=collectionMock;
    }
}