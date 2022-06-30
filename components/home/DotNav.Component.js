import { useState, useEffect, useCallback } from 'react';

let dotActiveState;
export default function DotNav({ sections }) {
    const [dotActive, setDotActive] = useState(-1);

    const setDotActiveState = (val) => {
        dotActiveState = val;
        setDotActive(val);
    }

    useEffect(() => {
        if (screen.width >= 991) {
            window.addEventListener('scroll', handleScroll);

            // returned function will be called on component unmount 
            return () => {
                window.removeEventListener('scroll', handleScroll);
            }
        }
    }, []);

    const handleScroll = useCallback(() => {
        const scroll = window.pageYOffset + 5;
        [...Array(sections)].map((x, i) => {
            if (document.getElementById('s' + (i + 1)) && document.getElementById('s' + (i + 1)).offsetTop <= scroll) {
                if (dotActiveState !== i)
                    setDotActiveState(i);
                return 0;
            }
        })
    }, []);

    return (
        <div className="side-fixed d-none d-lg-flex">
            <div className="dotted-nav">
                {[...Array(sections)].map((x, i) =>
                    <a key={i} href={`#s${i + 1}`} className={`dot ${dotActive == i ? 'active' : ''}`} onClick={() => setDotActiveState(i)}></a>
                )}
            </div>
        </div>
    )
}