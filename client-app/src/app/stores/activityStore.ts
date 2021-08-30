import { makeAutoObservable } from "mobx";

export default class ActivityStore {
    title = 'MobX';

    constructor() {
        makeAutoObservable(this)
    }

    setTitle = () => {
        this.title = this.title + '!';
    }
}