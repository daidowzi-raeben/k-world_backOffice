<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h4><strong>상품후기</strong></h4>
                <div class="search-wrap grid">
                    <div class="left">
                        <label class="label">후기 검색</label>
                        <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Select" />
                        <Dropdown v-model="dropdownValue2" :options="dropdownValues2" optionLabel="name" placeholder="Select" />

                        <div class="grid formgrid">
                            <div class="col-12 mb-2 lg:col-6 lg:mb-0">
                                <IconField iconPosition="left">
                                    <InputText type="text" placeholder="Search" />
                                    <InputIcon class="pi pi-search" />
                                </IconField>
                            </div>
                        </div>
                    </div>

                    <div class="right">
                        <Button label="Search" class="mr-2" />
                        <Button label="Reset" />
                    </div>
                </div>

                <div class="table-top">
                    <div class="left">Total 10</div>
                    <div class="right">
                        <Button label="선택삭제" severity="secondary" />
                    </div>
                </div>
                <div class="table-wrap">
                    <table class="table">
                        <tr>
                            <th>
                                <div class="field-checkbox mb-0">
                                    <Checkbox id="checkOption" name="option" value="all" v-model="checkboxValue" />
                                </div>
                            </th>
                            <th>상품명</th>
                            <th>이름</th>
                            <th>제목</th>
                            <th>평점</th>
                            <th>확인</th>
                            <th>관리</th>
                        </tr>
                        <tr v-for="item in 5" :key="item">
                            <td>
                                <div class="field-checkbox mb-0">
                                    <Checkbox :id="'checkOption' + item" name="option" :value="item" v-model="checkboxValue" />
                                </div>
                            </td>
                            <td class="text-left">TH-파스텔드레스셔츠-그린</td>
                            <td>이름</td>
                            <td>후기입니다</td>
                            <td>
                                <Rating v-model="ratingValue" class="justify-content-center" readonly />
                            </td>
                            <td>
                                <div class="field-checkbox mb-0 justify-content-center">
                                    <Checkbox :id="'checkOption' + item + '_confirm'" name="option" :value="item" v-model="checkboxValue" />
                                </div>
                            </td>
                            <td><Button label="수정" outlined @click="router.push('/shop/review/detail')" /></td>
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
        dropdownValues2: ref([
            { name: 'select1', code: '1' },
            { name: 'select2', code: '2' },
            { name: 'select3', code: '3' },
        ]),
        dropdownValue2: ref(null),
        router: useRouter(),
        checkboxValue: ref([]),
        ratingValue: ref(4),
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