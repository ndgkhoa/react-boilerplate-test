import {
  useQueryParams as useQueryParamsLib,
  NumberParam,
  StringParam,
  withDefault,
} from 'use-query-params';
import debounce from 'lodash/debounce';

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_KEYWORD = undefined;
const DEFAULT_HOURS = undefined;
const DEFAULT_ENTITY = undefined;
const DEFAULT_NUMERICVALUE = undefined;
const DEFAULT_CODE = undefined;
const DEFAULT_DATE = undefined;
const DEFAULT_BASE = undefined;
const DEFAULT_OBJECT = undefined;
const DEFAULT_DATEFLIGHT = undefined;
const DEFAULT_WAREHOUSE = undefined;
const DEFAULT_MONTH = undefined;
const DEFAULT_STATUS = undefined;
const DEFAULT_GROUP = undefined;

const DEBOUNCE_TIME = 500;

export const useQueryParams = () => {
  const [queryParams, setQueryParams] = useQueryParamsLib({
    page: withDefault(NumberParam, DEFAULT_PAGE),
    pageSize: withDefault(NumberParam, DEFAULT_PAGE_SIZE),
    keyword: withDefault(StringParam, DEFAULT_KEYWORD),
    date: withDefault(StringParam, DEFAULT_DATE),
    hours: withDefault(NumberParam, DEFAULT_HOURS),
    entity: withDefault(StringParam, DEFAULT_ENTITY),
    base: withDefault(StringParam, DEFAULT_BASE),
    warehouse: withDefault(StringParam, DEFAULT_WAREHOUSE),
    object: withDefault(StringParam, DEFAULT_OBJECT),
    date_Flight: withDefault(StringParam, DEFAULT_DATEFLIGHT),
    code: withDefault(StringParam, DEFAULT_CODE),
    numericValue: withDefault(NumberParam, DEFAULT_NUMERICVALUE),
    month: withDefault(StringParam, DEFAULT_MONTH),
    status: withDefault(StringParam, DEFAULT_STATUS),
    group: withDefault(StringParam, DEFAULT_GROUP),
  });

  const setQueryWithDebounce = debounce((params: Partial<typeof queryParams>) => {
    setQueryParams(params);
  }, DEBOUNCE_TIME);

  return { queryParams, setQueryParams, setQueryWithDebounce };
};
