let setId;

const ServiceSetId = () => {

    const setSetId = (id) =>{
        setId = id;
    }
    const getId = () =>{
        return setId;
    }

    return {setSetId, getId}
};

export default ServiceSetId;