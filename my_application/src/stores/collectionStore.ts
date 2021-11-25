import {MainStore} from "./mainStore";
import {makeObservable,observable,action} from "mobx";
import {ICardProps} from "../components/card/card";

const collectionMock:ICardProps[] = [
    {
        title:'Amogus',
        rate:'10.0',
        posterImgUrl:''
    }
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