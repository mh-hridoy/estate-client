import moment from 'moment'
const compInitVal = (first, second, third) => {
    //first comp
    const dtcDate = first.date && moment(first.date)


    return {
        //first comp
        SSD: first.SSD,
        GSD: first.GSD,
        ADOM: first.ADOM,
        phaseOfRn: first.phaseOfRenovation,
        priceSqfOnSaleComp1: first.priceSqfOnSaleComp,
        priceSqfOnSaleComp2: first.LastPriceSqfOnSaleComp,
        saleCompGsdMap: first.GSDSaleCompMaps,
        saleCompSSDMap: first.saleCompsAndSSDMaps,
        rentGSD: first.rentGSD,
        priceSqfOnSoldComp1: first.priceSqfOnSoldComp,
        priceSqfOnSoldComp2: first.LastPriceSqfOnSoldComp,
        soldCompGsdMap: first.SSDSoldCompMaps,
        soldCompSSDMap: first.GSDSoldCompMaps,
        RentalCompsMap: first.rentalCompsAndMaps,
        p1Value: first.pOneValue,
        p2Value: first.pTwoValue,
        p3Value: first.pThreeValue,
        rentalRate: first.rentalRate,
        compUrlOne: first.compURL,
        compUrlTwo: first.compURLTwo,
        compUrlThree: first.compURLThree,
        compUrlFour: first.compURLFour,
        recomCma: first.recommendedCMA,
        wholetailVal: first.wholeTailValue,
        compBy: first.firstDTC,
        compByDate: dtcDate,

        //second comp
        sSSD: second.SSD,
        sGSD: second.GSD,
        sADOM: second.ADOM,
        sphaseOfRn: second.phaseOfRenovation,
        spriceSqfOnSaleComp1: second.priceSqfOnSaleComp,
        spriceSqfOnSaleComp2: second.LastPriceSqfOnSaleComp,
        ssaleCompGsdMap: second.GSDSaleCompMaps,
        ssaleCompSSDMap: second.saleCompsAndSSDMaps,
        srentGSD: second.rentGSD,
        spriceSqfOnSoldComp1: second.priceSqfOnSoldComp,
        spriceSqfOnSoldComp2: second.LastPriceSqfOnSoldComp,
        ssoldCompGsdMap: second.SSDSoldCompMaps,
        ssoldCompSSDMap: second.GSDSoldCompMaps,
        sRentalCompsMap: second.rentalCompsAndMaps,
        sp1Value: second.pOneValue,
        sp2Value: second.pTwoValue,
        sp3Value: second.pThreeValue,
        srentalRate: second.rentalRate,
        scompUrlOne: second.compURL,
        scompUrlTwo: second.compURLTwo,
        scompUrlThree: second.compURLThree,
        scompUrlFour: second.compURLFour,
        srecomCma: second.recommendedCMA,
        swholetailVal: second.wholeTailValue,
        scompBy: second.firstDTC,
        scompByDate: dtcDate,

        //third comp
        tSSD: third.SSD,
        tGSD: third.GSD,
        tADOM: third.ADOM,
        tphaseOfRn: third.phaseOfRenovation,
        tpriceSqfOnSaleComp1: third.priceSqfOnSaleComp,
        tpriceSqfOnSaleComp2: third.LastPriceSqfOnSaleComp,
        tsaleCompGsdMap: third.GSDSaleCompMaps,
        tsaleCompSSDMap: third.saleCompsAndSSDMaps,
        trentGSD: third.rentGSD,
        tpriceSqfOnSoldComp1: third.priceSqfOnSoldComp,
        tpriceSqfOnSoldComp2: third.LastPriceSqfOnSoldComp,
        tsoldCompGsdMap: third.SSDSoldCompMaps,
        tsoldCompSSDMap: third.GSDSoldCompMaps,
        tRentalCompsMap: third.rentalCompsAndMaps,
        tp1Value: third.pOneValue,
        tp2Value: third.pTwoValue,
        tp3Value: third.pThreeValue,
        trentalRate: third.rentalRate,
        tcompUrlOne: third.compURL,
        tcompUrlTwo: third.compURLTwo,
        tcompUrlThree: third.compURLThree,
        tcompUrlFour: third.compURLFour,
        trecomCma: third.recommendedCMA,
        twholetailVal: third.wholeTailValue,
        tcompBy: third.firstDTC,
        tcompByDate: dtcDate
    }


}

export default compInitVal;