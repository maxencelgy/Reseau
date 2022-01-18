//import { getIpNumber , getLogDate } from './fonction.js';
// http://localhost/J3M/ajax/ICMP/getIcmpData.php
// http://localhost/J3M/ajax/TCP/getIcmpData.php
// http://localhost/J3M/ajax/UDP/getIcmpData.php
// http://localhost/J3M/ajax/TLS/getIcmpData.php

fetch('http://localhost/J3M/ajax/ICMP/getDataIcmp.php')
    .then (function(response){
        return response.json()
    }).then(function (data){
        console.log(data)
        // jeu avec les données

        let ipVersion = data.map(function (e) {
            return e.version;
        });
        let nbIpv4 = 0
        let nbIpv6 = 0
        ipVersion.forEach(element => {
            if(element== 4){
                nbIpv4++;
            }else{
                nbIpv6++;
            }
        });
        console.log(nbIpv4)
        console.log(nbIpv6)

        protocolNameCanvas = document.getElementById('canvasIcmp1');
        let protocolName = protocolNameCanvas.getContext('2d');
        protocolName.canvas.width = 400;
        
        let protocolNameConfig = {
            type: 'pie',
            data: {
                labels: ["ipV4","ipv6"],
                datasets: [{
                    data: [nbIpv4,nbIpv6],
                    backgroundColor: [
                        '#050B4F',
                        '#FB9D2C',
                        
                    ],
                }]
            },
            options: {
                responsive: false,
                title: {
                    display: true,
                    fontSize: 30,
                    position: 'top',
                    text: 'Proportion Ipv4 et Ipv6',
                },
                legend: {
                    position: 'right',
                }
            }
        };
        let protocolNameChart = new Chart(protocolName, protocolNameConfig);
}) // fin du fectch





















































































































































fetch('http://localhost/J3M/ajax/UDP/getDataUdp.php')
    .then (function(response){
        return response.json()
    }).then(function (data){
        console.log(data)
        // jeu avec les données
        let ipVersion = data.map(function (e) {
            return e.version;
        });
        let nbIpv4 = 0
        let nbIpv6 = 0
        ipVersion.forEach(element => {
            if(element== 4){
                nbIpv4++;
            }else{
                nbIpv6++;
            }
        });
        console.log(nbIpv4)
        console.log(nbIpv6)

        protocolNameCanvas = document.getElementById('canvasUdp1');
        let protocolName = protocolNameCanvas.getContext('2d');
        protocolName.canvas.width = 400;
        
        let protocolNameConfig = {
            type: 'pie',
            data: {
                labels: ["ipV4","ipv6"],
                datasets: [{
                    data: [nbIpv4,nbIpv6],
                    backgroundColor: [
                        '#050B4F',
                        '#FB9D2C',
                        
                    ],
                }]
            },
            options: {
                responsive: false,
                title: {
                    display: true,
                    fontSize: 30,
                    position: 'top',
                    text: 'Proportion Ipv4 et Ipv6',
                },
                legend: {
                    position: 'right',
                }
            }
        };
        let protocolNameChart = new Chart(protocolName, protocolNameConfig);

}) // fin du fectch































































































































































































const selectListThree = document.querySelector('#select-list-detail'); 
        const graphiqueUDP = document.querySelector('#graphiqueUDP'); 
        const graphiqueTCP = document.querySelector('#graphiqueTCP'); 
        const graphiqueTLS = document.querySelector('#graphiqueTLS'); 
        const graphiqueICMP = document.querySelector('#graphiqueICMP'); 

        
        selectListThree.addEventListener("change",() => {
            if(selectListThree.value == 'TCP'){
                graphiqueTCP.classList.add("secNone");
                graphiqueUDP.classList.add("secNone");
                graphiqueTLS.classList.add("secNone");
                graphiqueICMP.classList.add("secNone");
                graphiqueTCP.classList.remove("secNone");
            }
            else if(selectListThree.value == 'UDP'){
                graphiqueTCP.classList.add("secNone");
                graphiqueUDP.classList.add("secNone");
                graphiqueTLS.classList.add("secNone");
                graphiqueICMP.classList.add("secNone");
                graphiqueUDP.classList.remove("secNone");
            }else if(selectListThree.value == 'TLSv1.2'){
                graphiqueTCP.classList.add("secNone");
                graphiqueUDP.classList.add("secNone");
                graphiqueTLS.classList.add("secNone");
                graphiqueICMP.classList.add("secNone");
                graphiqueTLS.classList.remove("secNone");
            }else{
                graphiqueTCP.classList.add("secNone");
                graphiqueUDP.classList.add("secNone");
                graphiqueTLS.classList.add("secNone");
                graphiqueICMP.classList.add("secNone");
                graphiqueICMP.classList.remove("secNone");
            }
        })