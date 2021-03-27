import {useState, useEffect} from 'react';


function useFetchPost(url, submitClick, data) {
    const [submitStatus, setSubmitStatus] = useState( 'standby');
    async function fetchUrl() {
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "omit", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow", // manual, *folslow, error
            referrer: "client", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        const json = await response.json().then(
            setSubmitStatus(response.status == 200 ? 'success' : 'error')
        );
        console.log(data);
    }
    useEffect(() => {
        if(submitClick) {
            setSubmitStatus('working');
            fetchUrl();
        };
    }, [submitClick]);
    return [submitStatus, setSubmitStatus];
}
export default useFetchPost;