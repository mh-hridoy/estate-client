import moment from 'moment'


const hoaLienData = (data) => {
    //HOA Lien
    const CcRsDate = data.ccAndRsDate && moment(data.ccAndRsDate)
    const affiDate = data.affidavitDate && moment(data.affidavitDate)
    const redempDate = data.redemptionDate && moment(data.redemptionDate)
    const tdDate = data.trDeedDate && moment(data.trDeedDate)
    const hoaDate = data.hoaLienDate && moment(data.hoaLienDate)
    const strDate = data.strDate && moment(data.strDate)
    const redempExp = data.redemptionExpires && moment(data.redemptionExpires)

    return {
        // Hoa lien
        lienForeclosing: data.lienForeclosing,
        noSTR: data.noSTR,
        defectiveLien: data.defectiveLien,
        hoaName: data.hoaName,
        hoaLienAmount: data.hoaLienAmount,
        hoaLienDate: hoaDate,
        dtBookPage: data.dtBookPage,
        trusteeFees: data.trusteeFees,
        trusteeHoa: data.trusteeHoa,
        totalDebt: data.totalDebt,
        strBookPage: data.strBookPage,
        strDate: strDate,
        ccAndRsInstrument: data.ccAndRsInstrument,
        ccAndRsDate: CcRsDate,


        isRedemptionInfo: data.isRedemptionInfo,
        affidavitDate: affiDate,
        taxCode: data.taxCode,
        redemptionExpires: redempExp,
        redeemedByOwner: data.redeemedByOwner,
        redemptionNoticeInst: data.redemptionNoticeInst,
        redemptionDate: redempDate,

        isForeclosureResult: data.isForeclosureResult,
        trDeedInstrument: data.trDeedInstrument,
        trDeedDate: tdDate,
        winningBidder: data.winningBidder,
        winningbid: data.winningbid,

        owner1: data.owner1,
        owner2: data.owner2,
        owner3: data.owner3,
        owner4: data.owner4,
        dtc: data.isDtcFirstCheck,
        dca: data.isDcaSecondCheck,
        thirdDca: data.isDcaFinalCheck,
    }
}

const taxLienData = (data) => {
    //Tax Lien
    const jdDate = data.judgmentDate && moment(data.judgmentDate)
    const afDate = data.affidavitDate && moment(data.affidavitDate)
    const redExpire = data.redemptionExpires && moment(data.redemptionExpires)
    const trDDate = data.trDeedDate && moment(data.trDeedDate)
    const redNoticeDate = data.redemptionDate && moment(data.redemptionDate)

    return {
        //tax Lien
        lienForeclosing: data.lienForeclosing,
        defectiveLien: data.defectiveLien,
        
        plaintiff: data.plaintiff,
        judgmentAmount: data.judgmentAmount,
        judgmentDate: jdDate,

        bpOrInstrument: data.bpOrInstrument,
        case: data.case,
        sheriffOrConstable: data.sheriffOrConstable,

        isRedemptionInfo: data.isRedemptionInfo,
        affidavitDate: afDate,
        taxCode: data.taxCode,
        redemptionExpires: redExpire,
        redeemedByOwner: data.redeemedByOwner,
        redemptionNoticeInst: data.redemptionNoticeInst,
        redemptionDate: redNoticeDate,

        isForeclosureResult: data.isForeclosureResult,
        trDeedInstrument: data.trDeedInstrument,
        trDeedDate: trDDate,
        winningBidder: data.winningBidder,
        winningbid: data.winningbid,


        owner1: data.owner1,
        owner2: data.owner2,
        owner3: data.owner3,
        owner4: data.owner4,
        dtc: data.isDtcFirstCheck,
        dca: data.isDcaSecondCheck,
        thirdDca: data.isDcaFinalCheck,

    }
}

const otherLienData = (data) => {

    //Other Lien
    const otherDateRecorder = data.dateRecorded && moment(data.dateRecorded)
    const otherAffDate = data.affidavitDate && moment(data.affidavitDate)
    const otherRedDate = data.redemptionDate && moment(data.redemptionDate)
    const redExpire = data.redemptionExpires && moment(data.redemptionExpires)


    return {
        //other Lien

        lender: data.lender,
        lienAmount: data.lienAmount,
        dateRecorded: otherDateRecorder,
        dtBookPage: data.dtBookPage,
        assignmentBookPage: data.assignmentBookPage,

        isRedemptionInfo: data.isRedemptionInfo,
        affidavitDate: otherAffDate,
        taxCode: data.taxCode,
        redemptionExpires: redExpire,
        redeemedByOwner: data.redeemedByOwner,
        redemptionNoticeInst: data.redemptionNoticeInst,
        redemptionDate: otherRedDate,

        owner1: data.owner1,
        owner2: data.owner2,
        owner3: data.owner3,
        owner4: data.owner4,
        dtc: data.isDtcFirstCheck,
        dca: data.isDcaSecondCheck,
        thirdDca: data.isDcaFinalCheck,

    }

}

export { hoaLienData, taxLienData, otherLienData };