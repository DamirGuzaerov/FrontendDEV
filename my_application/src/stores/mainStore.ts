import collectionStore from "./collectionStore";
import authorizationStore from "./authorizationStore";

class MainStore{

    collectionStore:collectionStore
    authStore:authorizationStore

    constructor() {
        this.collectionStore= new collectionStore(this);
        this.authStore = new authorizationStore(this);
    }
}

const mainStore = new MainStore();
export default mainStore;
export {MainStore}