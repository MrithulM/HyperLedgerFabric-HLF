/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class FabCar extends Contract {


    async initLedger(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const clientIdentity = ctx.stub.getCreator();
        console.info(clientIdentity)

        const cars = [
            {
                logo: 'https://www.freepnglogos.com/uploads/toyota-logo-png/logo-toyota-transparent-19.png',
                img: 'https://imgs.search.brave.com/UuPPTFiCEa5gzMPl4_7plIgQQE7sUyZCqiBpQaZdcXg/rs:fit:1200:1133:1/g:ce/aHR0cHM6Ly93d3cu/YXV0b21vYmxvZy5u/ZXQvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTkvMDYvMjAxOV9Q/cml1c19YTEVfQVdE/LWVfQmx1ZV8xM19B/NkQ2NkIwMzJBRERG/NUM0Q0JBRUVGRDE5/MzYyMUUzMkVCNTY4/RkMzLmpwZw',
                color: 'blue',
                make: 'Toyota',
                model: 'Prius',
                owner: 'Tomoko',
                isNew: false,
            },
            {   logo: 'https://imgs.search.brave.com/6ugaRz4hIrl3Y7amYGGZEtu9QrHMDkmkyx1stS7Nvyc/rs:fit:860:465:1/g:ce/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzIzMC0y/MzAwMDk5X2ZvcmQt/bXVzdGFuZy1sb2dv/LWhkLXBuZy1kb3du/bG9hZC5wbmc',
                img:'https://imgs.search.brave.com/fwkSoM-m4pApHeyoWTATTJrrAxvkvnwLzem_CGeROzQ/rs:fit:1200:1050:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTc3/ODc3My5qcGc',
                color: 'red',
                make: 'Ford',
                model: 'Mustang',
                owner: 'Brad',
                isNew: false,
            },
            {
                logo: 'https://www.freepnglogos.com/uploads/company-logo-png/hyundai-motor-company-logo-png-transparent-0.png',
                img: 'https://imgs.search.brave.com/ayAGV7ux6A2aF1RvLEBIWKYwONwdKCR26Qc8ItHh8Ac/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly90aGVn/cmVlbmNhcmd1eS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDQvR0NHXzIw/MjJfSHl1bmRhaV9U/dWNzb25fUEhFVl9y/ZjM0X2FjdG4tMjA0/OHgxMzY1LmpwZw',
                color: 'green',
                make: 'Hyundai',
                model: 'Tucson',
                owner: 'Jin Soo',
                isNew: false,
            },
            {   logo: "https://www.freepnglogos.com/uploads/vw-png-logo/pulman-volkswagen-new-pulman-motor-group-png-logo-3.png",
                img:"https://besthqwallpapers.com/Uploads/8-3-2017/14211/volkswagen-arteon-2017-4k-yellow-arteon-sedan.jpg",
                color: 'yellow',
                make: 'Volkswagen',
                model: 'Passat',
                owner: 'Max',
                isNew: false,

            },
            {   logo:"https://www.freepnglogos.com/uploads/tesla-logo-png-26.png",
                img:"https://wallpaper.dog/large/5472006.jpg",
                color: 'black',
                make: 'Tesla',
                model: 'S',
                owner: 'Adriana',
                isNew: false,

            },
            
        ];
        await ctx.stub.putState("transaction",JSON.stringify([]))
        for (let i = 0; i < cars.length; i++) {
            cars[i].docType = 'car';
            await ctx.stub.putState('CAR' + i, Buffer.from(JSON.stringify(cars[i])));
            console.info('Added <--> ', cars[i]);
        }
        console.info('============= END : Initialize Ledger ===========');
    }

    async queryCar(ctx, carNumber) {
        const carAsBytes = await ctx.stub.getState(carNumber); // get the car from chaincode state
        if (!carAsBytes || carAsBytes.length === 0) {
            return `${carNumber} does not exist`;
        }
        console.log(carAsBytes.toString());
        const data = await ctx.stub.getState("transaction");
        const transactions = JSON.parse(data);
        const txnID = await ctx.stub.getTxID();
        const timeValue = await ctx.stub.getTxTimestamp().toDate();

        // Format the date as a string
        const txnTime = timeValue.toISOString();

        transactions.push(JSON.stringify({reason:`Queried car number ${carNumber}`,txnID, txnTime}))
        await ctx.stub.putState("transaction",JSON.stringify(transactions));
        return carAsBytes.toString();
    }

    async createCar(ctx, logo, img,carNumber, make, model, color, owner) {
        console.info('============= START : Create Car ===========');

        const carExists = await ctx.stub.getState(carNumber);
        if(carExists.length !== 0){
            return `ID: ${carNumber} exists already!`
        }

        const car = {
            logo,
            img,
            color,
            docType: 'car',
            make,
            model,
            owner,
        };

        await ctx.stub.putState(carNumber, Buffer.from(JSON.stringify(car)));
        const data = await ctx.stub.getState("transaction");
        const transactions = JSON.parse(data);
        const txnID = await ctx.stub.getTxID();

                const timeValue = await ctx.stub.getTxTimestamp().toDate();

        // Format the date as a string
        const txnTime = timeValue.toISOString();
        transactions.push(JSON.stringify({reason:`Created car: ${carNumber}`,txnID, txnTime}))
        await ctx.stub.putState("transaction",JSON.stringify(transactions));
        console.info('============= END : Create Car ===========');
        console.info("Transaction successful! Car Added");
        return "Transaction successful! Car Added";
    }

    async deleteCar(ctx,carNumber){
        const carAsBytes = await ctx.stub.getState(carNumber);
        console.log(carAsBytes.toString()) // get the car from chaincode state
        if (!carAsBytes || carAsBytes.length === 0) {
            return `${carNumber} does not exist`;
        }
        try{
        await ctx.stub.deleteState(carNumber);
        const data = await ctx.stub.getState("transaction");
        const transactions = JSON.parse(data);
        const txnID = await ctx.stub.getTxID();
                const timeValue = await ctx.stub.getTxTimestamp().toDate();

        // Format the date as a string
        const txnTime = timeValue.toISOString();
        transactions.push(JSON.stringify({reason:`Deleted car: ${carNumber}`,txnID, txnTime}))
        await ctx.stub.putState("transaction",Buffer.from(JSON.stringify(transactions)));
        }
        catch(err){
            console.log(err);
        }
    }

    async queryAllCars(ctx) {
        const startKey = '';
        const endKey = 'transaction';
        const allResults = [];
        for await (const {key, value} of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: key, Record: record });
        }
        console.info(allResults);
        return JSON.stringify(allResults);
    }

    async changeCarOwner(ctx, carNumber, newOwner) {
        console.info('============= START : changeCarOwner ===========');

        const carAsBytes = await ctx.stub.getState(carNumber); // get the car from chaincode state
        if (!carAsBytes || carAsBytes.length === 0) {
            throw new Error(`${carNumber} does not exist`);
        }
        const car = JSON.parse(carAsBytes.toString());
        car.owner = newOwner;

        await ctx.stub.putState(carNumber, Buffer.from(JSON.stringify(car)));
        const data = await ctx.stub.getState("transaction");
        const transactions = JSON.parse(data);
        const txnID = await ctx.stub.getTxID();
                const timeValue = await ctx.stub.getTxTimestamp().toDate();

        // Format the date as a string
        const txnTime = timeValue.toISOString();
        transactions.push(JSON.stringify({reason:`Changed owner of ${carNumber} to ${newOwner}`,txnID, txnTime}))
        await ctx.stub.putState("transaction",JSON.stringify(transactions));
        console.info('============= END : changeCarOwner ===========');
    }

    async fetchTransaction(ctx){
        try{
            const transaction = await ctx.stub.getState("transaction");
            console.info(transaction)
            return transaction.toString();

        }catch(error){
            console.log(error);
        }
    }
}

module.exports = FabCar;
