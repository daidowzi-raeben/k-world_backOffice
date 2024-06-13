<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h4><strong>상품관리</strong></h4>
                <div class="search-wrap grid">
                    <div class="left">
                        <label class="label">상품 검색</label>
                        <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Select" />

                        <div class="grid formgrid">
                            <div class="col-12 mb-2 lg:col-6 lg:mb-0">
                                <IconField iconPosition="left">
                                    <InputText type="text" placeholder="Search" />
                                    <InputIcon class="pi pi-search" />
                                </IconField>
                            </div>
                        </div>

                        <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue" dateFormat="yy/mm/dd" placeholder="yyyy/mm/dd"></Calendar>
                        <span>~</span>
                        <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue2" dateFormat="yy/mm/dd" placeholder="yyyy/mm/dd"></Calendar>
                    </div>

                    <div class="right">
                        <Button label="Search" class="mr-2" />
                        <Button label="Reset" />
                    </div>
                </div>

                <div class="table-top">
                    <div class="left">Total 10</div>
                    <div class="right">
                        <Button label="상품등록" severity="secondary" @click="router.push('/shop/product/add')"  />
                    </div>
                </div>
                <div class="table-wrap">
                    <table class="table">
                        <tr>
                            <th>번호</th>
                            <th>상품코드</th>
                            <th>이미지</th>
                            <th>상품명</th>
                            <th>판매가</th>
                            <th>판매상태</th>
                            <th>Hot Pick</th>
                            <th>인기상품</th>
                            <th>재고</th>
                            <th>등록일/수정일</th>
                            <th>등록자</th>
                            <th>수정</th>
                        </tr>
                        <tr v-for="item in 5" :key="item">
                            <td>{{ item }}</td>
                            <td>10000004</td>
                            <td>
                                <img class="thumb-img sm" src="https://images.khan.co.kr/article/2023/08/29/news-p.v1.20230828.53498d1b40ad4d52b31987dac9454409_P1.jpg" />
                            </td>
                            <td>
                                <span class="text-grey">카테1 > 카테2 > 카테3</span><br />
                                상품명 샤랄랄라
                            </td>
                            <td>$900</td>
                            <td>Y</td>
                            <td>Y</td>
                            <td>Y</td>
                            <td>10</td>
                            <td>2024-05-20</td>
                            <td>홍길동</td>
                            <td>
                                <Button label="수정" outlined />
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="p-paginator p-component mt-2">
                    <button class="p-paginator-first p-paginator-element p-link p-disabled" type="button" disabled="">
                    <i class="pi pi-angle-left"></i>
                    </button>
                    <button class="p-paginator-prev p-paginator-element p-link p-disabled" type="button" disabled="">
                    <i class="pi pi-angle-double-left"></i>
                    </button>
                    <span class="p-paginator-pages" data-pc-section="pages">
                    <button class="p-paginator-page p-paginator-element p-link p-highlight" type="button">1</button>
                    <button class="p-paginator-page p-paginator-element p-link" type="button">2</button>
                    </span>
                    <button class="p-paginator-first p-paginator-element p-link" type="button">
                    <i class="pi pi-angle-right"></i>
                    </button>
                    <button class="p-paginator-prev p-paginator-element p-link" type="button">
                    <i class="pi pi-angle-double-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    data() {
    return {
        dropdownValues: ref([
            { name: 'select1', code: '1' },
            { name: 'select2', code: '2' },
            { name: 'select3', code: '3' },
        ]),
        dropdownValue: ref(null),
        calendarValue:'',
        calendarValue2:'',
        router: useRouter(),
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