import moment from 'moment'


const mortgageInfoVal = (data) => {
    const dateRecorder = data.dateRecorded && moment(data.dateRecorded)
    const maturityDate = data.maturityDate && moment(data.maturityDate)
    const strDate = data.strDate && moment(data.strDate)
    const modADate = data.modADate && moment(data.modADate)
    const modAmaturityDate = data.modAmaturityDate && moment(data.modAmaturityDate)
    const subADate = data.subADate && moment(data.subADate)
    const trDeedDate = data.trDeedDate && moment(data.trDeedDate)
    return {
        lienForeclosing: data.lienForeclosing,
        noSTR: data.noSTR,
        defectiveLien: data.defectiveLien,
        lender: data.lender,
        lienAmount: data.lienAmount,
        dateRecorded: dateRecorder,
        instrument: data.instrument,
        dtBookPage: data.dtBookPage,
        assignmentBookPage: data.assignmentBookPage,
        loanType: data.loanType,
        loanTerm: data.loanTerm,
        maturityDate: maturityDate,
        rightToCure: data.rightToCure,
        tursteeFee: data.tursteeFee,
        trustee: data.trustee,
        strBookPage: data.strBookPage,
        strDate: strDate,
        loanEstimatedBalance: data.loanEstimatedBalance,
        estLatePaymentAndFees: data.estLatePaymentAndFees,
        totalEstimatedDebt: data.totalEstimatedDebt,
        cmaArv: data.cmaArv,
        totalDebt: data.totalDebt,
        rentalRate: data.rentalRate,
        legalDescMatch: data.legalDescMatch,
        propertyAddressMatch: data.propertyAddressMatch,
        resonableFees: data.resonableFees,
        isAmortizationView: data.isAmortizationView,
        amortAnnualInterestRate: data.amortAnnualInterestRate,
        amortMonthlyPayment: data.amortMonthlyPayment,
        monthlyPrincipalPayment: data.monthlyPrincipalPayment,
        monthlyInterestPayment: data.monthlyInterestPayment,
        estimatedEquity: data.estimatedEquity,

        isModA: data.isModA,
        modABookPage: data.modABookPage,
        modADate: modADate,
        modALienAmount: data.modALienAmount,
        modALoanTerm: data.modALoanTerm,
        modAmaturityDate: modAmaturityDate,
        annualInterestRate: data.annualInterestRate,
        monthlyPayment: data.monthlyPayment,
        loanEstBalance: data.loanEstBalance,
        modAEstLatePaymentAndFees: data.modAEstLatePaymentAndFees,
        modAtotalEstimatedDebt: data.modAtotalEstimatedDebt,

        isSubA: data.isSubA,
        subABookPage: data.subABookPage,
        subADate: subADate,
        lienPosition: data.lienPosition,

        FResults: data.isForeclosureResult,
        trDeedInstrument: data.trDeedInstrument,
        trDeedDate: trDeedDate,
        winningBidder: data.winningBidder,
        winningbid: data.winningbid,

        owner1: data.owner1,
        owner2: data.owner2,
        owner3: data.owner3,
        owner4: data.owner4,
        isDtcFirstCheck: data.isDtcFirstCheck,
        isDcaSecondCheck: data.isDcaSecondCheck,
        isDcaFinalCheck: data.isDcaFinalCheck,
    }
}


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

export { mortgageInfoVal, hoaLienData, taxLienData, otherLienData };