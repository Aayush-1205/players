import React from 'react'
import NetPlayer from 'netplayer'
import vid from './assets/vid.mp4'
import comp from './assets/comp_2kb.mp4'
import './App.css'

const FirstPlayer = () => {
    return (
        <NetPlayer
            sources={[
                {
                    file: vid,
                    label: '1080p'
                },
                {
                    file: comp,
                    label: '720p'
                },
            ]}
            // subtitles={[
            //   {
            //     lang: 'jp',
            //     language: 'Japanese',
            //     file: 'https://artplayer.org/assets/sample/subtitle.jp.srt'
            //   },
            //   {
            //     lang: 'cn',
            //     language: 'Chinese',
            //     file: 'https://artplayer.org/assets/sample/subtitle.cn.srt'
            //   }
            // ]}
            className="player"
        // thumbnail="https://preview.zorores.com/8b/8bc17ab9537166f2abb7e0bef2b57e23/thumbnails/sprite.vtt"
        // autoPlay

        />
    )
}

export default FirstPlayer