const Alert = ({alertApp}) => {
    return (
        <div class={`alert alert-${alertApp.color}`} role="alert">
            {alertApp.mensaje}
        </div>
    )
};

export default Alert;