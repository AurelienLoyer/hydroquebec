'use strict';

var request = require('request');
var j = request.jar();
request = request.defaults({jar:j});

const credentials = require('./config.js');

const base_url = 'https://www.hydroquebec.com'
const login_url = `${base_url}/portail/web/clientele/authentification?p_auth=2zsOn8aU&p_p_id=58&p_p_lifecycle=1&p_p_state=normal&p_p_mode=view&p_p_col_id=column-2&p_p_col_count=1&saveLastPath=0&_58_struts_action=%2Flogin%2Flogin&_58_doActionAfterLogin=false&_58_action=login&login=${credentials.user}&_58_password=${credentials.password}`;
const main_url = `${base_url}/portail/fr/group/clientele/gerer-mon-compte`
const consommation_board_url = `${base_url}/portail/group/clientele/portrait-de-consommation`;
const consommation_url = `${base_url}/portail/fr/group/clientele/portrait-de-consommation?p_p_id=portraitConsommation_WAR_lswrb_INSTANCE_G4WcPdIy6LKl&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=resourceObtenirInfoCommunPortrait&p_p_cacheability=cacheLevelPage&p_p_col_id=column-2&p_p_col_count=1`;

request.post({
    url: login_url,
}, function (error, res, body) {
    
    console.log('🍪',j);

    request({
        url: main_url,
    }, function (err, response, body) {
        if(err) console.log(err);

        console.log('🍪',j);

        request({
            url: consommation_board_url,
        }, function (err, response, body) {
            if(err) console.log(err);
            console.log('🍪',j);
            
            request({
                url: consommation_url,
            }, function (err, response, body) {
                if(err) console.log(err);
                console.log('🍪',j);
                
            });

        });

    });

})
