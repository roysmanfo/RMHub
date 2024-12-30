import React from 'react';
import "../css/global/global.scss";

export default Message;

function ErrorMessage({messageClasses, message}: {messageClasses: string, message: string}) {
    return (
        <div className={messageClasses} id='error-message'>
            {message}
        </div>
    )
}

function SuccessMessage({messageClasses, message}: {messageClasses: string, message: string}) {
    return (
        <div className={messageClasses} id='sucess-message'>
            {message}
        </div>
    )
}

/**
 * Options available for @param type
 * - error (red)
 * - success (green)
 * - message (yellow)
 */
function Message({type, messageClasses, message}: {type: string, messageClasses: string, message: string}) {
    switch (type){
        case 'error': return <ErrorMessage messageClasses={messageClasses} message={message} />
        case 'success': return <SuccessMessage messageClasses={messageClasses} message={message} />
    }
    
    return (
        <div className={messageClasses} id='message'>
            {message}
        </div>
    )
}
