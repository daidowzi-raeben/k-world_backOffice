<template>
    <div>
        <div v-for="(v, i) in TEST?.itineraryList" :key="i">
            <div v-for="(x, j) in v?.policies" :key="j">
                <div v-for="(z, p) in jsonPars(x?.policyActive)?.flightList" :key="p">
                    <div v-if="z?.arrivalCityInfo?.cityCode === 'PQC' && z?.travelTime > 300 && z?.travelTime < 400">
                        <!-- {{ z?.travelTime }} -->
                        {{ z?.marketingAirlineCode }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
    data() {
        return {
            params: {
                mode: 1,
                searchCriteria: {
                    grade: 3,
                    tripType: 2,
                    journeyNo: 1,
                    passengerInfoType: {
                        adultCount: 2,
                        childCount: 0,
                        infantCount: 0
                    },
                    journeyInfoTypes: [
                        {
                            journeyNo: 1,
                            departDate: '2024-12-15',
                            departCode: 'SEL',
                            arriveCode: 'PQC',
                            departAirport: 'ICN',
                            arriveAirport: 'PQC'
                        },
                        {
                            journeyNo: 2,
                            departDate: '2024-12-20',
                            departCode: 'PQC',
                            arriveCode: 'SEL',
                            departAirport: 'PQC',
                            arriveAirport: 'ICN'
                        }
                    ],
                    policyId: null,
                    productId:
                        'tripType:RT|criteriaToken:NEWTOKEN|KLUv_QBY5Q4AFt5uQiBrqg4BCANAYMAgueOGAIRI4FE_ACjDklFSzkSYEJMablLg_HCYhigYJVaydWFDfl2RoVNgfKyFtx6EZmofkf8JCWcAWQBbABkCMquhttaUyD2-Ktue3KkO6U5EZrWSyjxBSD-R7Ulzf9QRVP6HWmbtAhCH5OFAcBAdJhSAVDwslUviMcEkFI1iokLhLkjwwKElsRrFZSltmBigIJmoXBZIBg2TB4eEwnV0fMDQkthhBAjdOrVNL__DSma1TzcKYPs85jxe9UN061QqDQXIrPavgWxfajwgs5oFtqGnqT_rRs-PQHk-CqXJ3yR06xTJRE8pirRumGcqkVntYpvo-rP-twYl01LvT5qbSy5-3olU1e-Jsb4hZ73Y5sUU5oxzFpnuKHolB1Xu6Rti7yNXDXqrzIOP6l03iqYI3nnC72a1cywe0LgiaTXqcDALLNFVcW1XFnpsbAMG2EY7fanxSp6fXf0chyAB5sJFsAoZDpNRcLGIYBwY1sLAyHgdmUKWm_BGbzwr9jwYF-ENmHFTK1DDXeMgaOSfj-7lDfcc-80dv5nj1x34ddDF6yH3zy_csedV7JzVadBBL98KADtzBSWL-lDsRxMQhCRE1BS3ujlxjr1UaTdikgE=|cabinClass:YSGROUP|adult:2|child:0|infant:0|subChannel:2|channel:EnglishSite|currency:KRW|extensionFlag:16|ExtensionOptions:|list:true|idc:SHAXY|detailSearch:false|issuer:CT|SeparateJourneyType:null|searchScene:flight-list|airlineCodes:|listTime:202407031516|agencyModelAgg:true|SessionId:4715fb08-5b4a-4307-a985-479a14fe1d96|dCity_1:SEL|aAirport_1:PQC|dAirport_1:ICN|aCity_1:PQC|date_1:2024-12-15|dCity_2:PQC|aAirport_2:ICN|dAirport_2:PQC|aCity_2:SEL|date_2:2024-12-20',
                    token: '{"firstReqTime":1719990960340,"reqTimeStamp":1719990957269,"reqTimes":0,"transId":"9aafe9d6-2879-4722-84df-4ef469a67659"}'
                },
                sortInfoType: {
                    direction: true,
                    orderBy: 'Direct',
                    topList: []
                },
                tagList: [
                    {
                        type: 3,
                        key: 'recommendSortPrejudgment',
                        value: 'false'
                    }
                ],
                filterType: {
                    filterFlagTypes: [],
                    queryItemSettings: []
                },
                abtList: [
                    {
                        abCode: '240509_IBU_RFUO',
                        abVersion: 'A'
                    }
                ],
                head: {
                    appid: '700020',
                    syscode: '40',
                    cver: '3',
                    cid: '',
                    extension: [
                        {
                            name: 'abTesting',
                            value: 'M:-1,231213_IBU_OSPCL:A;M:1,231211_IBU_fxo:B;M:56,240304_IBU_LPSSE:C;M:61,240308_IBU_olrp:C;M:23,240319_IBU_ollrc:B;M:65,240425_IBU_OMPA:A;M:41,240417_IBU_Ohtwl:B;M:95,240418_IBU_zfsxo:D;M:99,240411_IBU_CTMOL:B;M:55,240509_IBU_RFUO:A;'
                        },
                        {
                            name: 'source',
                            value: 'ONLINE'
                        },
                        {
                            name: 'sotpGroup',
                            value: 'Trip'
                        },
                        {
                            name: 'sotpLocale',
                            value: 'ko-KR'
                        },
                        {
                            name: 'sotpCurrency',
                            value: 'KRW'
                        },
                        {
                            name: 'allianceID',
                            value: '1078328'
                        },
                        {
                            name: 'sid',
                            value: '2036522'
                        },
                        {
                            name: 'ouid',
                            value: 'ctag.hash.9c1dc8e098b9'
                        },
                        {
                            name: 'uuid'
                        },
                        {
                            name: 'useDistributionType',
                            value: '1'
                        },
                        {
                            name: 'flt_app_session_transactionId',
                            value: '9aafe9d6-2879-4722-84df-4ef469a67659'
                        },
                        {
                            name: 'vid',
                            value: '1710205163015.326epKjcT9bJ'
                        },
                        {
                            name: 'pvid',
                            value: '5'
                        },
                        {
                            name: 'Flt_SessionId',
                            value: '2'
                        },
                        {
                            name: 'channel'
                        },
                        {
                            name: 'x-ua',
                            value: 'v=3_os=ONLINE_osv=10.15.7'
                        },
                        {
                            name: 'PageId',
                            value: '10320667452'
                        },
                        {
                            name: 'clientTime',
                            value: '2024-07-03T16:16:00+09:00'
                        },
                        {
                            name: 'SpecialSupply',
                            value: 'false'
                        },
                        {
                            name: 'LowPriceSource',
                            value: 'searchForm'
                        },
                        {
                            name: 'Flt_BatchId',
                            value: 'd111b214-153f-4cc4-ae40-8a7e04cec5d1'
                        },
                        {
                            name: 'BlockTokenTimeout',
                            value: '0'
                        }
                    ]
                }
            }
        };
    },
    computed: {
        ...mapState(['TEST'])
    },
    mounted() {
        this.ACTION_TEST(this.params);
    },
    methods: {
        ...mapActions(['ACTION_TEST']),
        jsonPars(v) {
            return JSON.parse(v);
        }
    }
};
</script>

<style>
</style>