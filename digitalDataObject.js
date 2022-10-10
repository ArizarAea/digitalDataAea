//DigitalData Object
{
    "digitalTouchpoint": {
        "category": {
            "primaryCategory": "DigitalX" 
        },
        "touchpointInfo": {
            "ClosestAirport": "MAD", //Origen 
            "language": "ES", //Lenguaje
            "market": "ES", //Mercado
            "officeID": "PMIUX08AF" 
        }
    },
    "event": [ // se incluye en el array de event cada nuevo evento que se va generando
        {
            "eventInfo": {
                "key": "PageLoad", //Nombre del evento ocurrido
                "eventName": "PageLoad",  //Nombre del evento ocurrido
                "pageID": "PLU", //Id de la página donde ha ocurrido el evento
                "componentID": "PLU", 
                "timestamp": "2022-10-07T09:52:37.230Z" //TimeStamp del momento en el que se ha añadido la información
            },
            "category": {
                "primaryCategory": "Display" // Dispositivo 
            },
            "attributes": []
        },
        {
            "eventInfo": {
                "key": "DigitalDataLoaded",
                "eventName": "DigitalDataReady",
                "pageID": "PLU",
                "componentID": "",
                "timestamp": "2022-10-07T09:52:39.889Z"
            },
            "category": {
                "primaryCategory": "DigitalData"
            },
            "attributes": []
        },
        {
            "eventInfo": {
                "key": "PageView",
                "eventName": "PageView",
                "pageID": "PLU",
                "componentID": "",
                "timestamp": "2022-10-07T09:52:39.889Z"
            },
            "category": {
                "primaryCategory": "PageView"
            },
            "attributes": []
        },
        {
            "category": {
                "primaryCategory": "PageView"
            },
            "eventInfo": {
                "key": "PageView",
                "eventName": "PageView",
                "pageID": "PLUOK",
                "timestamp": ""
            }
        }
    ],
    "page": { // Información de página
        "category": {
            "primaryCategory": "PLURefX"
        },
        "pageInfo": {
            "pageID": "PLURefX", //ID de página
            "pageName": "payment" // Nombre de la página
        }
    },
    "pageInstanceID": "PLURefX", // ID de la página
    "user": [
        {
            "profile": [
                {
                    "profileInfo": {
                        "deviceType": "Desktop",
                        "userEmail": "",
                        "userID": "",
                        "userLevel": "",
                        "userPoints": "",
                        "userAgent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
                        "OS": "Win32"
                    }
                }
            ]
        }
    ],
    "transaction": { //Información de la transacción
        "PNR": {
            "creationDate": "",
            "recLoc": "" //PNR localizador
        },
        "total": {
            "totalPrice": {
                "amount": 0 //Precio total (sumatorio)
            },
            "priceBreakDown": {
                "amount": 0, // Precio sin impuestos añadidos
                "tax": { 
                    "totalTax": {
                        "amount": 0 // Impuestos incluidos en el precio
                    }
                }
            }
        },
        "payment": [ //Información del pago
            {
                "price": {
                    "totalPrice": {  //Precio total (sumatorio)
                        "amount": 0,
                        "currency": ""
                    }
                },
                "methodOfPayment": "" //Método de pago escogido 
            }
        ]
    },
    "traveller": [ //Información del usuario
        {
            "firstName": "",
            "midName": "",
            "lastName": "",
            "title": "",
            "resident": false,
            "contactInformation": {
                "email": [
                    {
                        "emailAddress": "AIZAGUIRRE@AIREUROPA.COM"
                    }
                ]
            },
            "loyaltyProgram": [
                {
                    "tier": "",
                    "points": "",
                    "program": "",
                    "numberOf": ""
                }
            ],
            "eTicket": [
                ""
            ],
            "hasInfant": false
        }
    ],
    "searchInput": { //Información de la búsqueda del usuario
        "category": {
            "primaryCategory": ""
        },
        "searchInputInfo": {
            "flightDetails": [
                {
                    "departure": { //Información del origen
                        "locationCode": "", 
                        "dateTime": ""
                    },
                    "arrival": {  //Información del destino
                        "locationCode": "",
                        "dateTime": ""
                    },
                    "tripType": "",
                    "passenger": [
                        {
                            "numberOfPassengers": 0,
                            "passengerTypeCode": ""
                        }
                    ]
                }
            ]
        }
    }
}