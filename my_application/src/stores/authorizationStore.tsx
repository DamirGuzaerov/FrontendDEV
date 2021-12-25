import {ICardProps} from "../components/card/card";
import {MainStore} from "./mainStore";
import {makeObservable, observable} from "mobx";

export default class authorizationStore {
    token:string = ""

    constructor(public mainStore:MainStore) {
        makeObservable(this, {
            token: observable,
        })
    }

    public SetToken = (token:string) => {
        this.token = token;
    }

    public GetToken = ()=>{
        return this.token;
    }

}