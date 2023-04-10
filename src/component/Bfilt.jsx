import React from 'react'

const Bfilt = ({filter}) => {
    return (
        <>
            <div>
                <input type='checkbox' onClick={() => { filter("one") }} /><br />
                <input type='checkbox' onClick={() => { filter("two") }} /><br />
                <input type='checkbox' onClick={() => { filter("three") }} /><br />

            </div>
        </>
    )
}

export default Bfilt;