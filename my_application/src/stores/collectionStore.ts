import {MainStore} from "./mainStore";
import {makeObservable,observable,action,get} from "mobx";
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
import {createAction} from "mobx/dist/core/action";


const collectionMock:ICardProps[] = [
    {
        id:0,
        title:'Минари',
        rate:'6.9',
        posterImgUrl:poster0,
        description:"Семья корейских мигрантов осваивает деревенскую Америку 1980-х. «Оскар» за лучшую женскую роль второго плана",
        genre:["Драма"]
    },
    {
        id:1,
        title:'Солнцестояние',
        rate:'6.6',
        posterImgUrl:poster1,
        description:'Гости идиллического шведского праздника становятся жертвами зловещих ритуалов. Затейливый хоррор Ари Астера',
        genre:["ужасы","драма","триллер"]
    },
    {
        id:2,
        title:'Манк',
        rate:'7.1',
        posterImgUrl:poster2,
        description:'Одинокая Ферн кочует по Америке в доме на колесах. «Оскар» за лучший фильм, режиссуру и женскую роль',
        genre:["Драма"]
    },
    {
        id:3,
        title:'Девушка, пода...',
        rate:'6.8',
        posterImgUrl:poster3
    },
    {
        id:4,
        title:'Земля кочевников',
        rate:'7.3',
        posterImgUrl:poster4
    },
    {
        id:5,
        title:'Отец',
        rate:'7.9',
        posterImgUrl:poster5
    },
    {
        id:6,
        title:'Еще по одной',
        rate:'7.5',
        posterImgUrl:poster6
    },
    {
        id:7,
        title:'Душа',
        rate:'8.3',
        posterImgUrl:poster7
    },
    {
        id:8,
        title:'Годзилла',
        rate:'6.1',
        posterImgUrl:poster8
    },
]
export default class collectionStore {
    collection: ICardProps[]

    constructor(public mainStore:MainStore) {
        makeObservable(this, {
            collection: observable,
        })

        this.collection = collectionMock;
    }

    public GetCardById = (id?:string) => {
        return this.collection.find((card)=>card.id?.toString()===id)
    }

}