
export const CajasMenu = (props) => {
    return (    
        <div>
            {props.map((item, i) => item.value[i])}
        </div>
    )
};