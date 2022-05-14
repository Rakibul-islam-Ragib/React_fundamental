class Context{
    constructor(value = null){
        this.value = value;
    }

    //provider Component
    Provider = ({childern, value}) =>  {
        this.value = value;
        return childern ;
    }

    // consumer

    Consumer = ({childern}) => childern(this.value);
}

function createContext(value = null) {
    const context = new Context(value);
    return {
        Provider: context.Provider,
        Consumer: context.Consumer,
    }
}
export default createContext;