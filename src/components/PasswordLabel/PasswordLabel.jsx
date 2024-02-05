import React, { useContext } from 'react'
import { PassLengthContext } from '../../context/PassLength';

function PasswordLabel() {
    const { passLength } = useContext(PassLengthContext);

    return (
        <>
            <div className="flex md:flex-start md:justify-center">
                <label htmlFor="length">
                    <span className="font-light md:text-xl tracking-wide">
                        Password length
                    </span>
                    :{" "}
                    <span className="font-bold ml-1 md:text-xl text-charcoal">
                        {passLength < 10 ? `0${passLength}` : passLength}
                    </span>
                </label>
            </div>
        </>
    );
}

export default PasswordLabel