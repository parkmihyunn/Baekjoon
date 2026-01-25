function solution(fees, records) {
    const [stTime, stFee, unitTime, unitFee] = fees;
    const parkingLot = new Map();
    const accTime = new Map();
    const result = [];
    
    records.forEach((status) => {
        const [time, number, inout] = status.split(" ");
        if(inout === "IN") parkingLot.set(number, time);
        else {
            const [inH, inM] = parkingLot.get(number).split(":").map(Number);
            parkingLot.delete(number);
            const [outH, outM] = time.split(":").map(Number);
            const pM = ( outH*60 + outM ) - ( inH*60 + inM );
            accTime.get(number) ? accTime.set(number, accTime.get(number) + pM) : accTime.set(number, pM);
        }
    });
    
    if(parkingLot.size !== 0) {
        parkingLot.forEach((inTime, number) => {
            const [inH, inM] = parkingLot.get(number).split(":").map(Number);
            parkingLot.delete(number);
            const pM = ( 23*60 + 59 ) - ( inH*60 + inM );
            accTime.get(number) ? accTime.set(number, accTime.get(number) + pM) : accTime.set(number, pM);
        });
    }
    
    accTime.forEach((accT, number) => {
        if(accT <= stTime) result.push([number, stFee]);
        else result.push([number, stFee + Math.ceil((accT-stTime)/unitTime)*unitFee]);
    });
    
    return result.sort((a,b) => a[0] - b[0]).map(el => el[1]);
}