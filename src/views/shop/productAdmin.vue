<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h4><strong>상품관리</strong></h4>
                <div class="search-wrap grid">
                    <div class="left">
                        <label class="label">분류 검색</label>
                        <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Select" />

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
                    <div class="right"></div>
                </div>
                <div class="table-wrap">
                    <table class="table">
                        <tr>
                            <th></th>
                            <th>분류코드</th>
                            <th>분류명</th>
                            <th>상품 수</th>
                            <th>판매가능</th>
                            <th>이벤트여부</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>
                                <button type="button" class="btn btn-fold">
                                    <i class="pi pi-angle-right isActive"></i>
                                </button>
                            </td>
                            <td>A0001</td>
                            <td class="text-left">Food</td>
                            <td>5</td>
                            <td>Y</td>
                            <td>Y</td>
                            <td><Button outlined label="추가" /></td>
                        </tr>
                        <tr class="fold isActive">
                            <td>
                                <button type="button" class="btn btn-fold">
                                    <i class="pi pi-angle-right isActive"></i>
                                </button>
                            </td>
                            <td>A0001</td>
                            <td class="text-left depth">Food</td>
                            <td>5</td>
                            <td>Y</td>
                            <td>Y</td>
                            <td><Button outlined label="추가" /></td>
                        </tr>
                        <tr class="fold isActive">
                            <td></td>
                            <td>A0001</td>
                            <td class="text-left depth">Food</td>
                            <td>5</td>
                            <td>Y</td>
                            <td>Y</td>
                            <td></td>
                        </tr>
                        <tr v-for="item in 5" :key="item">
                            <td>
                                <button type="button" class="btn btn-fold">
                                    <i class="pi pi-angle-right"></i>
                                </button>
                            </td>
                            <td>A0001</td>
                            <td class="text-left">Food</td>
                            <td>5</td>
                            <td>Y</td>
                            <td>Y</td>
                            <td><Button outlined label="추가" /></td>
                        </tr>
                    </table>
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