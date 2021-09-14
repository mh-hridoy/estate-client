import moment from 'moment'
const initVal = (data) => {
    const dateRecorder = data.firstmortgageInfo.dateRecorded && moment(data.firstmortgageInfo.dateRecorded)
    const maturityDate = data.firstmortgageInfo.maturityDate && moment(data.firstmortgageInfo.maturityDate)
    const strDate = data.firstmortgageInfo.strDate && moment(data.firstmortgageInfo.strDate)
    const modADate = data.firstmortgageInfo.modA.modADate && moment(data.firstmortgageInfo.modA.modADate)
    const modAmaturityDate = data.firstmortgageInfo.modA.modAmaturityDate && moment(data.firstmortgageInfo.modA.modAmaturityDate)
    const subADate = data.firstmortgageInfo.subA.subADate && moment(data.firstmortgageInfo.subA.subADate)
    const trDeedDate = data.firstmortgageInfo.foreclosureResult.trDeedDate && moment(data.firstmortgageInfo.foreclosureResult.trDeedDate)

    // 2nd lien
    const sdateRecorder = data.secondMortgageInfo.dateRecorded && moment(data.secondMortgageInfo.dateRecorded)
    const smaturityDate = data.secondMortgageInfo.maturityDate && moment(data.secondMortgageInfo.maturityDate)
    const sstrDate = data.secondMortgageInfo.strDate && moment(data.secondMortgageInfo.strDate)
    const smodADate = data.secondMortgageInfo.modA.modADate && moment(data.secondMortgageInfo.modA.modADate)
    const smodAmaturityDate = data.secondMortgageInfo.modA.modAmaturityDate && moment(data.secondMortgageInfo.modA.modAmaturityDate)
    const ssubADate = data.secondMortgageInfo.subA.subADate && moment(data.secondMortgageInfo.subA.subADate)
    const strDeedDate = data.secondMortgageInfo.foreclosureResult.trDeedDate && moment(data.secondMortgageInfo.foreclosureResult.trDeedDate)

    // 3rd Lien
    const tdateRecorder = data.thirdMortgageInfo.dateRecorded && moment(data.thirdMortgageInfo.dateRecorded)
    const tmaturityDate = data.thirdMortgageInfo.maturityDate && moment(data.thirdMortgageInfo.maturityDate)
    const tstrDate = data.thirdMortgageInfo.strDate && moment(data.thirdMortgageInfo.strDate)
    const tmodADate = data.thirdMortgageInfo.modA.modADate && moment(data.thirdMortgageInfo.modA.modADate)
    const tmodAmaturityDate = data.thirdMortgageInfo.modA.modAmaturityDate && moment(data.thirdMortgageInfo.modA.modAmaturityDate)
    const tsubADate = data.thirdMortgageInfo.subA.subADate && moment(data.thirdMortgageInfo.subA.subADate)
    const ttrDeedDate = data.thirdMortgageInfo.foreclosureResult.trDeedDate && moment(data.thirdMortgageInfo.foreclosureResult.trDeedDate)

    //HOA Lien
    const CcRsDate = data.hoaLien.ccAndRsDate && moment(data.hoaLien.ccAndRsDate)
    const affiDate = data.hoaLien.redemptionInfo.affidavitDate && moment(data.hoaLien.redemptionInfo.affidavitDate)
    const redempDate = data.hoaLien.redemptionInfo.redemptionDate && moment(data.hoaLien.redemptionInfo.redemptionDate)
    const tdDate = data.hoaLien.foreclosureResult.trDeedDate && moment(data.hoaLien.foreclosureResult.trDeedDate)

    //Tax Lien
    const jdDate = data.taxLien.judgmentDate && moment(data.taxLien.judgmentDate)
    const afDate = data.taxLien.redemptionInfo.affidavitDate && moment(data.taxLien.redemptionInfo.affidavitDate)
    const redExpire = data.taxLien.redemptionInfo.redemptionExpires && moment(data.taxLien.redemptionInfo.redemptionExpires)
    const trDDate = data.taxLien.foreclosureResult.trDeedDate && moment(data.taxLien.foreclosureResult.trDeedDate)
    const redNoticeDate = data.taxLien.redemptionInfo.redemptionDate && moment(data.taxLien.redemptionInfo.redemptionDate)

    //Other Lien
    const otherDateRecorder = data.otherMortgageInfo.dateRecorded && moment(data.otherMortgageInfo.dateRecorded)
    const otherAffDate = data.otherMortgageInfo.redemptionInfo.affidavitDate && moment(data.otherMortgageInfo.redemptionInfo.affidavitDate)
    const otherRedDate = data.otherMortgageInfo.redemptionInfo.redemptionDate && moment(data.otherMortgageInfo.redemptionInfo.redemptionDate)

    return {
        fLienFCL: data.firstmortgageInfo.lienForeclosing,
        fNoStr: data.firstmortgageInfo.noSTR,
        dfLien: data.firstmortgageInfo.defectiveLien,
        lender: data.firstmortgageInfo.lender,
        amount: data.firstmortgageInfo.lienAmount,
        dateRecorder: dateRecorder,
        instrument: data.firstmortgageInfo.instrument,
        dtBookPage: data.firstmortgageInfo.dtBookPage,
        assignmentBP: data.firstmortgageInfo.assignmentBookPage,
        loanType: data.firstmortgageInfo.loanType,
        loanterm: data.firstmortgageInfo.loanTerm,
        maturityDate: maturityDate,
        rightToCure: data.firstmortgageInfo.rightToCure,
        trusteeFees: data.firstmortgageInfo.tursteeFee,
        trustee: data.firstmortgageInfo.trustee,
        strBP: data.firstmortgageInfo.strBookPage,
        strDate: strDate,
        loanEstimatedB: data.firstmortgageInfo.loanEstimatedBalance,
        estLateFee: data.firstmortgageInfo.estLatePaymentAndFees,
        totalestDebt: data.firstmortgageInfo.totalEstimatedDebt,
        cmaArv: data.firstmortgageInfo.cmaArv,
        totalDebt: data.firstmortgageInfo.totalDebt,
        rentalRate: data.firstmortgageInfo.rentalRate,
        exMatch: data.firstmortgageInfo.legalDescMatch,
        dtAddressMatch: data.firstmortgageInfo.propertyAddressMatch,
        attorneyFee: data.firstmortgageInfo.resonableFees,
        amortizationView: data.firstmortgageInfo.amortizationView.type,
        annualRate: data.firstmortgageInfo.amortizationView.annualInterestRate,
        monthlyPayment: data.firstmortgageInfo.amortizationView.monthlyPayment,
        mPrincipalPayment: data.firstmortgageInfo.amortizationView.monthlyPrincipalPayment,
        mInterestPay: data.firstmortgageInfo.amortizationView.monthlyInterestPayment,
        estEquity: data.firstmortgageInfo.amortizationView.estimatedEquity,

        modAView: data.firstmortgageInfo.modA.type,
        modBP: data.firstmortgageInfo.modA.modABookPage,
        modADate: modADate,
        modLienAmount: data.firstmortgageInfo.modA.modALienAmount,
        modATerm: data.firstmortgageInfo.modA.modALoanTerm,
        modAmaturityDate: modAmaturityDate,
        annualIterest: data.firstmortgageInfo.modA.annualInterestRate,
        mMonthlyPay: data.firstmortgageInfo.modA.monthlyPayment,
        mloanEst: data.firstmortgageInfo.modA.loanEstBalance,
        estLPay: data.firstmortgageInfo.modA.estLatePaymentAndFees,
        totalEstDebt: data.firstmortgageInfo.modA.totalEstimatedDebt,

        subAView: data.firstmortgageInfo.subA.type,
        subABp: data.firstmortgageInfo.subA.subABookPage,
        subADate: subADate,
        lienPosition: data.firstmortgageInfo.subA.lienPosition,
        FResults: data.firstmortgageInfo.foreclosureResult.type,
        trDeedIns: data.firstmortgageInfo.foreclosureResult.trDeedInstrument,
        trDeedDate: trDeedDate,
        FwinningBidder: data.firstmortgageInfo.foreclosureResult.winningBidder,
        winningBid: data.firstmortgageInfo.foreclosureResult.winningbid,
        owner1: data.firstmortgageInfo.propertySignature.owner1,
        owner2: data.firstmortgageInfo.propertySignature.owner2,
        owner3: data.firstmortgageInfo.propertySignature.owner3,
        owner4: data.firstmortgageInfo.propertySignature.owner4,
        dtc: data.firstmortgageInfo.propertySignature.dtcFirstCheck.type,
        dca: data.firstmortgageInfo.propertySignature.dcaSecondCheck.type,
        thirdDca: data.firstmortgageInfo.propertySignature.dcaFinalCheck.type,


        // second lien 
        sfLienFCL: data.secondMortgageInfo.lienForeclosing,
        sfNoStr: data.secondMortgageInfo.noSTR,
        sdfLien: data.secondMortgageInfo.defectiveLien,
        slender: data.secondMortgageInfo.lender,
        samount: data.secondMortgageInfo.lienAmount,
        sdateRecorder: sdateRecorder,
        sinstrument: data.secondMortgageInfo.instrument,
        sdtBookPage: data.secondMortgageInfo.dtBookPage,
        sassignmentBP: data.secondMortgageInfo.assignmentBookPage,
        sloanType: data.secondMortgageInfo.loanType,
        sloanterm: data.secondMortgageInfo.loanTerm,
        smaturityDate: smaturityDate,
        srightToCure: data.secondMortgageInfo.rightToCure,
        strusteeFees: data.secondMortgageInfo.tursteeFee,
        strustee: data.secondMortgageInfo.trustee,
        sstrBP: data.secondMortgageInfo.strBookPage,
        sstrDate: sstrDate,
        sloanEstimatedB: data.secondMortgageInfo.loanEstimatedBalance,
        sestLateFee: data.secondMortgageInfo.estLatePaymentAndFees,
        stotalestDebt: data.secondMortgageInfo.totalEstimatedDebt,
        scmaArv: data.secondMortgageInfo.cmaArv,
        stotalDebt: data.secondMortgageInfo.totalDebt,
        srentalRate: data.secondMortgageInfo.rentalRate,
        sexMatch: data.secondMortgageInfo.legalDescMatch,
        sdtAddressMatch: data.secondMortgageInfo.propertyAddressMatch,
        sattorneyFee: data.secondMortgageInfo.resonableFees,
        samortizationView: data.secondMortgageInfo.amortizationView.type,
        sannualRate: data.secondMortgageInfo.amortizationView.annualInterestRate,
        smonthlyPayment: data.secondMortgageInfo.amortizationView.monthlyPayment,
        smPrincipalPayment: data.secondMortgageInfo.amortizationView.monthlyPrincipalPayment,
        smInterestPay: data.secondMortgageInfo.amortizationView.monthlyInterestPayment,
        sestEquity: data.secondMortgageInfo.amortizationView.estimatedEquity,

        smodAView: data.secondMortgageInfo.modA.type,
        smodBP: data.secondMortgageInfo.modA.modABookPage,
        smodADate: smodADate,
        smodLienAmount: data.secondMortgageInfo.modA.modALienAmount,
        smodATerm: data.secondMortgageInfo.modA.modALoanTerm,
        smodAmaturityDate: smodAmaturityDate,
        sannualIterest: data.secondMortgageInfo.modA.annualInterestRate,
        smMonthlyPay: data.secondMortgageInfo.modA.monthlyPayment,
        smloanEst: data.secondMortgageInfo.modA.loanEstBalance,
        sestLPay: data.secondMortgageInfo.modA.estLatePaymentAndFees,
        stotalEstDebt: data.secondMortgageInfo.modA.totalEstimatedDebt,

        ssubAView: data.secondMortgageInfo.subA.type,
        ssubABp: data.secondMortgageInfo.subA.subABookPage,
        ssubADate: ssubADate,
        slienPosition: data.secondMortgageInfo.subA.lienPosition,
        sFResults: data.secondMortgageInfo.foreclosureResult.type,
        strDeedIns: data.secondMortgageInfo.foreclosureResult.trDeedInstrument,
        strDeedDate: strDeedDate,
        sFwinningBidder: data.secondMortgageInfo.foreclosureResult.winningBidder,
        swinningBid: data.secondMortgageInfo.foreclosureResult.winningbid,
        ssowner1: data.secondMortgageInfo.propertySignature.owner1,
        ssowner2: data.secondMortgageInfo.propertySignature.owner2,
        sowner3: data.secondMortgageInfo.propertySignature.owner3,
        sowner4: data.secondMortgageInfo.propertySignature.owner4,
        sdtc: data.secondMortgageInfo.propertySignature.dtcFirstCheck.type,
        sdca: data.secondMortgageInfo.propertySignature.dcaSecondCheck.type,
        sthirdDca: data.secondMortgageInfo.propertySignature.dcaFinalCheck.type,

        // third lien 

        tfLienFCL: data.thirdMortgageInfo.lienForeclosing,
        tfNoStr: data.thirdMortgageInfo.noSTR,
        tdfLien: data.thirdMortgageInfo.defectiveLien,
        tlender: data.thirdMortgageInfo.lender,
        tamount: data.thirdMortgageInfo.lienAmount,
        tdateRecorder: tdateRecorder,
        tinstrument: data.thirdMortgageInfo.instrument,
        tdtBookPage: data.thirdMortgageInfo.dtBookPage,
        tassignmentBP: data.thirdMortgageInfo.assignmentBookPage,
        tloanType: data.thirdMortgageInfo.loanType,
        tloanterm: data.thirdMortgageInfo.loanTerm,
        tmaturityDate: tmaturityDate,
        trightToCure: data.thirdMortgageInfo.rightToCure,
        ttrusteeFees: data.thirdMortgageInfo.tursteeFee,
        ttrustee: data.thirdMortgageInfo.trustee,
        tstrBP: data.thirdMortgageInfo.strBookPage,
        tstrDate: tstrDate,
        tloanEstimatedB: data.thirdMortgageInfo.loanEstimatedBalance,
        testLateFee: data.thirdMortgageInfo.estLatePaymentAndFees,
        ttotalestDebt: data.thirdMortgageInfo.totalEstimatedDebt,
        tcmaArv: data.thirdMortgageInfo.cmaArv,
        ttotalDebt: data.thirdMortgageInfo.totalDebt,
        trentalRate: data.thirdMortgageInfo.rentalRate,
        texMatch: data.thirdMortgageInfo.legalDescMatch,
        tdtAddressMatch: data.thirdMortgageInfo.propertyAddressMatch,
        tattorneyFee: data.thirdMortgageInfo.resonableFees,
        tamortizationView: data.thirdMortgageInfo.amortizationView.type,
        tannualRate: data.thirdMortgageInfo.amortizationView.annualInterestRate,
        tmonthlyPayment: data.thirdMortgageInfo.amortizationView.monthlyPayment,
        tmPrincipalPayment: data.thirdMortgageInfo.amortizationView.monthlyPrincipalPayment,
        tmInterestPay: data.thirdMortgageInfo.amortizationView.monthlyInterestPayment,
        testEquity: data.thirdMortgageInfo.amortizationView.estimatedEquity,

        tmodAView: data.thirdMortgageInfo.modA.type,
        tmodBP: data.thirdMortgageInfo.modA.modABookPage,
        tmodADate: tmodADate,
        tmodLienAmount: data.thirdMortgageInfo.modA.modALienAmount,
        tmodATerm: data.thirdMortgageInfo.modA.modALoanTerm,
        tmodAmaturityDate: tmodAmaturityDate,
        tannualIterest: data.thirdMortgageInfo.modA.annualInterestRate,
        tmMonthlyPay: data.thirdMortgageInfo.modA.monthlyPayment,
        tmloanEst: data.thirdMortgageInfo.modA.loanEstBalance,
        testLPay: data.thirdMortgageInfo.modA.estLatePaymentAndFees,
        ttotalEstDebt: data.thirdMortgageInfo.modA.totalEstimatedDebt,

        tsubAView: data.thirdMortgageInfo.subA.type,
        tsubABp: data.thirdMortgageInfo.subA.subABookPage,
        tsubADate: tsubADate,
        tlienPosition: data.thirdMortgageInfo.subA.lienPosition,
        tFResults: data.thirdMortgageInfo.foreclosureResult.type,
        ttrDeedIns: data.thirdMortgageInfo.foreclosureResult.trDeedInstrument,
        ttrDeedDate: ttrDeedDate,
        tFwinningBidder: data.thirdMortgageInfo.foreclosureResult.winningBidder,
        twinningBid: data.thirdMortgageInfo.foreclosureResult.winningbid,
        towner1: data.thirdMortgageInfo.propertySignature.owner1,
        towner2: data.thirdMortgageInfo.propertySignature.owner2,
        towner3: data.thirdMortgageInfo.propertySignature.owner3,
        towner4: data.thirdMortgageInfo.propertySignature.owner4,
        tdtc: data.thirdMortgageInfo.propertySignature.dtcFirstCheck.type,
        tdca: data.thirdMortgageInfo.propertySignature.dcaSecondCheck.type,
        tthirdDca: data.thirdMortgageInfo.propertySignature.dcaFinalCheck.type,


        // Hoa lien
        hLienFCL: data.hoaLien.lienForeclosing,
        hNoStr: data.hoaLien.noSTR,
        hfLien: data.hoaLien.defectiveLien,
        hame: data.hoaLien.hoaName,
        hmount: data.hoaLien.hoaLienAmount,
        hateRecorded: data.hoaLien.hoaLienDate,
        htBookPage: data.hoaLien.dtBookPage,
        hrusteeFees: data.hoaLien.trusteeFees,
        husteeHOA: data.hoaLien.trusteeHoa,
        hotalDebt: data.hoaLien.totalDebt,
        htrBP: data.hoaLien.strBookPage,
        htrDate: data.hoaLien.strDate,
        hInstrument: data.hoaLien.ccAndRsInstrument,
        hDate: CcRsDate,




        hoaRedemp: data.hoaLien.redemptionInfo.type,
        hfDate: affiDate,
        hCode: data.hoaLien.redemptionInfo.taxCode,
        hdExp: data.hoaLien.redemptionInfo.redemptionExpires,
        hddemOwner: data.hoaLien.redemptionInfo.redeemedByOwner,
        hdNotice: data.hoaLien.redemptionInfo.redemptionNoticeInst,
        hdNoticeDate: redempDate,

        hResults: data.hoaLien.foreclosureResult.type,
        hrDeedIns: data.hoaLien.foreclosureResult.trDeedInstrument,
        hrDeedDate: tdDate,
        hwinningBidder: data.hoaLien.foreclosureResult.winningBidder,
        hinningBid: data.hoaLien.winningbid,

        hwner1: data.hoaLien.propertySignature.owner1,
        hwner2: data.hoaLien.propertySignature.owner2,
        hwner3: data.hoaLien.propertySignature.owner3,
        hwner4: data.hoaLien.propertySignature.owner4,
        htc: data.hoaLien.propertySignature.dtcFirstCheck.type,
        hca: data.hoaLien.propertySignature.dcaSecondCheck.type,
        hhirdDca: data.hoaLien.propertySignature.dcaFinalCheck.type,


        //tax Lien
        txLienFCL: data.taxLien.lienForeclosing,
        txfLien: data.taxLien.defectiveLien,
        plaitiff: data.taxLien.plaintiff,
        jdAmount: data.taxLien.judgmentAmount,
        txateRecorded: jdDate,

        txtBookPage: data.taxLien.bpOrInstrument,
        txInstrument: data.taxLien.case,
        shConstable: data.taxLien.sheriffOrConstable,

        txubAView: data.taxLien.redemptionInfo.type,
        txfDate: afDate,
        txCode: data.taxLien.redemptionInfo.taxCode,
        txdExp: redExpire,
        txddemOwner: data.taxLien.redemptionInfo.redeemedByOwner,
        txdNotice: data.taxLien.redemptionInfo.redemptionNoticeInst,
        txdNoticeDate: redNoticeDate,

        txResults: data.taxLien.foreclosureResult.type,
        txrDeedIns: data.taxLien.foreclosureResult.trDeedInstrument,
        txrDeedDate: trDDate,
        txwinningBidder: data.taxLien.foreclosureResult.winningBidder,
        txinningBid: data.taxLien.foreclosureResult.winningbid,
        txwner1: data.taxLien.propertySignature.owner1,
        txwner2: data.taxLien.propertySignature.owner2,
        txwner3: data.taxLien.propertySignature.owner3,
        txwner4: data.taxLien.propertySignature.owner4,
        txtc: data.taxLien.propertySignature.dtcFirstCheck,
        txca: data.taxLien.propertySignature.dcaSecondCheck,
        txhirdDca: data.taxLien.propertySignature.dcaFinalCheck,

        //other Lien

        otherLender: data.otherMortgageInfo.lender,
        otherAmount: data.otherMortgageInfo.lienAmount,
        otherDate: otherDateRecorder,
        otherBP: data.otherMortgageInfo.dtBookPage,
        otherAssignment: data.otherMortgageInfo.assignmentBookPage,
        otherRedemp: data.otherMortgageInfo.redemptionInfo.type,
        otherfDate: otherAffDate,
        otherCode: data.otherMortgageInfo.redemptionInfo.taxCode,
        otherdExp: data.otherMortgageInfo.redemptionInfo.redemptionExpires,
        otherddemOwner: data.otherMortgageInfo.redemptionInfo.redeemedByOwner,
        otherdNotice: data.otherMortgageInfo.redemptionInfo.redemptionNoticeInst,
        otherdNoticeDate: otherRedDate,

        otherwner1: data.otherMortgageInfo.propertySignature.owner1,
        otherwner2: data.otherMortgageInfo.propertySignature.owner2,
        otherwner3: data.otherMortgageInfo.propertySignature.owner3,
        otherwner4: data.otherMortgageInfo.propertySignature.owner4,
        othertc: data.otherMortgageInfo.propertySignature.dtcFirstCheck.type,
        otherca: data.otherMortgageInfo.propertySignature.dcaSecondCheck.type,
        otherhirdDca: data.otherMortgageInfo.propertySignature.dcaFinalCheck.type

    }

}

const mortgageHeaderInfoVal = (data) => {
    return {
        rodUrl: data.countyRODURL,
        manualSearch: data.manualSearch,
        noActiveLien: data.noActiveMortgageLien,
    }

}

export { initVal, mortgageHeaderInfoVal };