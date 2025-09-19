import http from "../utils/http";

/**
 * URL
 */
export const URL_EVALUATION_IMPORT_EXCEL = "evaluation/importExcelEvaluation";
export const URL_EVALUATION_GET_LIST = "evaluation/getListEvaluation";
export const URL_EVALUATION_DELETE = "evaluation/deleteEvaluation";
export const URL_EVALUATION_FILTER_OPTION = "evaluation/getFilterOption";

export const URL_EVALUATION_GET_DATA_CHART = "evaluation/getDataChart";
export const URL_EVALUATION_GET_DETAIL = "evaluation/getDetailEvaluation";
export const URL_EVALUATION_GET_LIST_RANK = "evaluation/getListRank";

export const URL_EVALUATION_GET_DATA_CHART_V2 = "evaluation/getDataChartV2";

export const URL_EVALUATION_GET_LATEST_DATE = "evaluation/getLatestDate";

const tTwoEvaluationApi = {

    /**
     * importEvaluationExcel
     */
    importEvaluationExcel(body: any) {
        return http.post<any>(URL_EVALUATION_IMPORT_EXCEL, body);
    },

    /**
     * getListEvaluation
     */
    getListEvaluation(body: any) {
        return http.post<any>(URL_EVALUATION_GET_LIST, body);
    },

    /**
     * deleteEvaluation
     */
    deleteEvaluation(body: any) {
        return http.post<any>(URL_EVALUATION_DELETE, body);
    },

    /**
     * getFilterOption
     */
    getFilterOption(body: any) {
        return http.post<any>(URL_EVALUATION_FILTER_OPTION, body);
    },

    /**
     * getDataChart
     */
    getDataChart(body: any) {
        return http.post<any>(URL_EVALUATION_GET_DATA_CHART, body);
    },

    /**
     * getDetailEvaluation
     */
    getDetailEvaluation(body: any) {
        return http.post<any>(URL_EVALUATION_GET_DETAIL, body);
    },

    /**
     * getListRank
     */
    getListRank(body: any) {
        return http.post<any>(URL_EVALUATION_GET_LIST_RANK, body);
    },


    /**
    * getDataChart
    */
    getDataChartV2(body: any) {
        return http.post<any>(URL_EVALUATION_GET_DATA_CHART_V2, body);
    },

    /**
     * getLatestDate
     */
    getLatestDate() {
        return http.post<any>(URL_EVALUATION_GET_LATEST_DATE, { data: {} });
    },
};

export default tTwoEvaluationApi;
