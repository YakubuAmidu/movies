import React from 'react';
import './Watch.scss';
import { ArrowBack } from '@material-ui/icons';

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBack />
                Home
            </div>
            <video className="video" autoplay progress controls src="https://storage.coverr.co/videos/pkYvcdHMCmDMT02nwLBmfeFIXI66hBEcW?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjM4OTQ4MzExfQ.qeQzAGu1jHpRQOdDj1mEh40JOS9Ii8lyZWt-VPyMgxM"/>
        </div>
    )
}

export default Watch;