function Time () {
    let time = new Date();
    return (<h3>Current time is :{time.toLocaleDateString()}-{" "}{time.toLocaleTimeString()}</h3>)
}

export default Time;