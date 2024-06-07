<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h4><strong>주문내역</strong></h4>
                <div class="search-wrap grid">
                    <div class="left">
                        <label class="label">주문 검색</label>
                        <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Select" />

                        <div class="grid formgrid">
                            <div class="col-12 mb-2 lg:col-6 lg:mb-0">
                                <IconField iconPosition="left">
                                    <InputText type="text" placeholder="Search" />
                                    <InputIcon class="pi pi-search" />
                                </IconField>
                            </div>
                        </div>

                        <label class="label">기간 검색</label>
                        <Dropdown v-model="dropdownValue2" :options="dropdownValues2" optionLabel="name" placeholder="Select" />
                        <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue" dateFormat="yy/mm/dd" placeholder="yyyy/mm/dd"></Calendar>
                        <span>~</span>
                        <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue2" dateFormat="yy/mm/dd" placeholder="yyyy/mm/dd"></Calendar>
                    </div>

                    <div class="right">
                        <Button label="Search" class="mr-2" />
                        <Button label="Reset" />
                    </div>
                </div>

                <TabMenu :model="nestedRouteItems" />

                <div class="table-top mt-4">
                    <div class="left">Total 10</div>
                    <div class="right">
                        <Button label="숨김해제" severity="secondary" class="mr-2" />
                        <Button label="수기등록" severity="secondary" />
                    </div>
                </div>
                <div class="table-wrap">
                    <table class="table">
                        <tr>
                            <th>
                                <div class="field-checkbox mb-0">
                                    <Checkbox id="checkOption1" name="option" value="all" v-model="checkboxValue" />
                                </div>
                            </th>
                            <th>번호</th>
                            <th>주문일시</th>
                            <th>주문번호</th>
                            <th>주문자</th>
                            <th>주문상품</th>
                            <th>총 상품금액</th>
                            <th>총 배송비</th>
                            <th>총 주문금액</th>
                            <th>결제방법</th>
                            <th>결제상태</th>
                            <th>미배송</th>
                            <th>배송중</th>
                            <th>배송완료</th>
                            <th>취소</th>
                            <th>교환</th>
                            <th>반품</th>
                            <th>환불</th>
                            <th>관리자메모</th>
                            <th>주문유형</th>
                        </tr>
                    </table>
                    <div class="table-nodata">검색된 주문이 없습니다.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    data() {
    return {
        dropdownValues: ref([
            { name: 'select1', code: '1' },
            { name: 'select2', code: '2' },
            { name: 'select3', code: '3' },
        ]),
        dropdownValue: ref(null),
        dropdownValues2: ref([
            { name: '주문일', code: '1' },
        ]),
        dropdownValue2: ref(null),
        calendarValue: ref(null),
        calendarValue2: ref(null),
        nestedRouteItems: ref([
            {
                label: '전체',
            },
            {
                label: '입금대기',
            },
            {
                label: '결제완료',
            },
            {
                label: '상품준비중',
            },
            {
                label: '배송중',
            },
            {
                label: '배송완료',
            },
            {
                label: '구매확정',
            }
        ]),
        checkboxValue: ref([]),
    };
  },
  components: {},
  created(){},
  mounted() {
    
  },
  methods: {
  },
};
</script>


<style>

</style>