/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:30:34 
 * @Last Modified by: @LiLPandemio
 * @Last Modified time: 2022-03-31 11:03:04
 */
import EncryptedStorage from 'react-native-encrypted-storage';
import config from '../../config';

export async function apiRequest(urlappendant, jsondata, method = "POST") {
    let apiresponse = await fetch(config.apiurl + urlappendant, {
        method: method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: jsondata
    })
        .then(response => response.json())
        .then(response => {
            return response;
        })
    return apiresponse;
}
export async function getQuickTexts() {
    let outp = await fetch('https://quickmeet.societyplus.net/api/index.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            do: 'getQuickTexts',
            token: await getToken(),
        })
    })
        .then(response => response.json())
        .then(response => {
            return response;
        })
    return outp;
}
export async function checkAPIConnection() {
    //Returns true if api connects successfully and false if not.
    let outp = await fetch('https://quickmeet.societyplus.net/api/index.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },

    }).then(response => response.json())
        .then(response => {
            return response;
        })
    //{"response": "Server_OK"}
    if (outp.response === "Server_OK") {
        //console.log("SERVER OK");
        return true;
    } else {
        //console.log("SERVER ERROR");
        return false;
    }
}
export async function getProfileData(rule, data, token) {
    //Rule stands for what parameter you provide, can be mail, token...
    //Data is the rule value
    //Token is your token.

}

export function getTextStoriesJSON() {
    const JSONTEXTSTORIES = [
        // { key: 1, profilePicURL: 'https://cataas.com/cat/says/1', time: '19:51', txt: 'Tengo que comprar 1 barra de pan, que perezaaaaa' },
        // { key: 2, profilePicURL: 'https://cataas.com/cat/says/2', time: '19:52', txt: 'Tengo que comprar 2 barras de pan, que perezaaaaa' },
        // { key: 3, profilePicURL: 'https://cataas.com/cat/says/3', time: '19:53', txt: 'Tengo que comprar 3 barras de pan, que perezaaaaa' },
        // { key: 4, profilePicURL: 'https://cataas.com/cat/says/4', time: '19:54', txt: 'Tengo que comprar 4 barras de pan, que perezaaaaa' },
        // { key: 5, profilePicURL: 'https://cataas.com/cat/says/5', time: '19:55', txt: 'Tengo que comprar 5 barras de pan, que perezaaaaa' },
        // { key: 6, profilePicURL: 'https://cataas.com/cat/says/6', time: '19:56', txt: 'Tengo que comprar 6 barras de pan, que perezaaaaa' },
    ]
    return JSONTEXTSTORIES;
}

export async function tokenStatus() {
    const session = await EncryptedStorage.getItem("user_session");
    if (session !== undefined && session !== null) {
        //SESION HAS A TOKEN!, PROCEED TO VERIFY IT
        const sesdata = JSON.parse(session);
        let token = sesdata.token;
        var fdata = new FormData();
        fdata.append('token', token);
        let outp = await fetch('https://quickmeet.societyplus.net/api/auth/tokenstatus', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: fdata
        })
            .then(response => response.json())
            .then(response => {

                if (response.response == true) {
                    return "TOKEN_OK";
                } else {
                    return "TOKEN_EXPIRED";
                }
            })
            .catch(err => console.error(err));
        return outp;
    } else {
        return "NOT_FOUND"
    }
}
export async function getToken() {
    const session = await EncryptedStorage.getItem("user_session");
    if (session !== undefined && session !== null) {
        //SESION HAS A TOKEN!, PROCEED TO VERIFY IT
        const sesdata = JSON.parse(session);
        let token = sesdata.token;
        return token;
    } else {
        return "NOT_FOUND"
    }
}


export function getVisualStoriesJSON() {
    const JSONVISUALSTORIES = [
        { key: 1, StoryContent: "https://cataas.com/cat/says/10d10", profilePicURL: "https://cataas.com/cat/says/1a05" },
        { key: 2, StoryContent: "https://cataas.com/cat/says/1as020", profilePicURL: "https://cataas.com/cat/says/10sd06" },
        { key: 3, StoryContent: "https://cataas.com/cat/says/1d030", profilePicURL: "https://cataas.com/cat/says/10as07" },
        { key: 4, StoryContent: "https://cataas.com/cat/says/1d0as40", profilePicURL: "https://cataas.com/cat/says/10da08" },
        { key: 5, StoryContent: "https://cataas.com/cat/says/1asd0100", profilePicURL: "https://cataas.com/cat/says/1sd0055" },
        { key: 6, StoryContent: "https://cataas.com/cat/says/1as0200", profilePicURL: "https://cataas.com/cat/says/10as065" },
        { key: 7, StoryContent: "https://cataas.com/cat/says/10da300", profilePicURL: "https://cataas.com/cat/says/10ds075" },
        { key: 8, StoryContent: "https://cataas.com/cat/says/1ds0400", profilePicURL: "https://cataas.com/cat/says/10ad085" },
    ]
    return JSONVISUALSTORIES;
}
export function getLastMessagesJSON() {
    const LastMessages = [
        { key: 1, isPinned: true, userName: 'LiLPandemio🚀', lastMSG: 'La beta pa cuando?', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/1' },
        { key: 2, isPinned: true, userName: 'Will Smith', lastMSG: 'Voy a rodar una peli, nueva con la roca, te hago spoiler? xDDD', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/2' },
        { key: 3, isPinned: false, userName: 'Papa', lastMSG: 'El hamster esta hibernando', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/3' },
        { key: 4, isPinned: false, userName: 'Jesucristo', lastMSG: 'Hola papá', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/4' },
        { key: 5, isPinned: false, userName: 'Mia Khalifa', lastMSG: 'Te echo de menos 7w7', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/5' },
        { key: 6, isPinned: false, userName: 'Dominic', lastMSG: 'Le recogo a las 7 sr?', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/6' },
        { key: 7, isPinned: false, userName: 'CR7', lastMSG: 'El proximo gol te lo dedico', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/7' },
        { key: 8, isPinned: false, userName: 'Messi', lastMSG: 'Te presto a mi esposa', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/8' },
        { key: 9, isPinned: false, userName: 'LiLPandemio🚀', lastMSG: 'La beta pa cuando?', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/1' },
        { key: 10, isPinned: false, userName: 'D3RK0T', lastMSG: 'Maricon me encontrao al rubius comprando pan', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/2' },
        { key: 11, isPinned: false, userName: 'Papa', lastMSG: 'El hamster esta hibernando', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/3' },
        { key: 12, isPinned: false, userName: 'Jesucristo', lastMSG: 'Hola papá', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/4' },
        { key: 13, isPinned: false, userName: 'Mia Khalifa', lastMSG: 'Te echo de menos 7w7', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/5' },
        { key: 14, isPinned: false, userName: 'Dominic', lastMSG: 'Le recogo a las 7 sr?', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/6' },
        { key: 15, isPinned: false, userName: 'CR7', lastMSG: 'El proximo gol te lo dedico', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/7' },
        { key: 16, isPinned: false, userName: 'Triplemariconhijueputaremalpariodelaconchadelaquesalio', lastMSG: 'Te presto a mi esposa', time: '19:54', profilePicURL: 'https://cataas.com/cat/says/8' },
    ]
    return LastMessages;
}