import collectionStore from "./collectionStore";

class MainStore{

    collectionStore:collectionStore

    constructor() {
        this.collectionStore= new collectionStore(this);
    }
}

const mainStore = new MainStore();
export default mainStore;
export {MainStore}