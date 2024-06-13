<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h4><strong>상품등록</strong></h4>
                <TabView>
                    <TabPanel header="노출정보">
                        <div class="input-wrap mt-2">
                            <label class="label">상품코드</label>
                            <InputText type="text" placeholder="placeholder" :disabled="true"></InputText>
                        </div>
                        <div class="input-wrap">
                            <label class="label">카테고리</label>
                            <div class="scroll-box" v-for="item in 4" :key="item">
                                <button type="button" class="btn" v-for="item in 20" :key="item">카테고리{{ item }}</button>
                            </div>
                            <div class="ml-4">
                                <Button label="Select" />
                            </div>
                        </div>
                        <div class="grid mt-0">
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label">노출 여부</label>
                                    <div class="field-radiobutton mb-0">
                                        <RadioButton id="option1" name="option" value="Yes" v-model="radioValue" />
                                        <label for="option1">Yes</label>
                                    </div>
                                    <div class="field-radiobutton mb-0">
                                        <RadioButton id="option2" name="option" value="No" v-model="radioValue" />
                                        <label for="option2">No</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label ml-8">판매 여부</label>
                                    <div class="field-radiobutton mb-0">
                                        <RadioButton id="option3" name="option2" value="Yes" v-model="radioValue2" />
                                        <label for="option3">Yes</label>
                                    </div>
                                    <div class="field-radiobutton mb-0">
                                        <RadioButton id="option4" name="option2" value="No" v-model="radioValue2" />
                                        <label for="option4">No</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="input-wrap">
                            <label class="label">상품 상태</label>
                            <div class="field-checkbox mb-0 mr-3">
                                <Checkbox id="checkOption1" name="option3" value="hotPick" v-model="checkboxValue" />
                                <label for="checkOption1">Hot pick</label>
                            </div>
                            <div class="field-checkbox mb-0">
                                <Checkbox id="checkOption2" name="option4" value="popular" v-model="checkboxValue2" />
                                <label for="checkOption2">인기상품(검색창)</label>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel header="기본정보">
                        <div class="grid mt-2">
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label">브랜드</label>
                                    <InputText type="text" placeholder="placeholder"></InputText>
                                    <Button label="Search" class="ml-2" @click="searchModal = true" />
                                    <Dialog header="브랜드 검색" v-model:visible="searchModal" :modal="true" class="modal-md">
                                        <div class="input-wrap">
                                            <IconField iconPosition="left">
                                                <InputText type="text" placeholder="Search" />
                                                <InputIcon class="pi pi-search" />
                                            </IconField>
                                            <Button label="Search" class="ml-2" />
                                        </div>
                                        <div class="table-wrap mt-4">
                                            <table class="table">
                                                <tr>
                                                    <th>브랜드명</th>
                                                </tr>
                                                <tr>
                                                    <td>A0001</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </Dialog>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label">상품코드</label>
                                    <InputText type="text" placeholder="placeholder" :disabled="true"></InputText>
                                </div>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="col-12 md:col-5">
                                <div class="input-wrap">
                                    <label class="label">상품명</label>
                                    <InputText type="text" placeholder="placeholder" class="wd-100"></InputText>
                                </div>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="col-12 md:col-5">
                                <div class="input-wrap">
                                    <label class="label">검색키워드</label>
                                    <InputText type="text" placeholder="placeholder" class="wd-100"></InputText>
                                </div>
                                <div class="input-wrap mt-1">
                                    <label class="label"></label>
                                    *상품명은 자동으로 등록되며 키워드는 콤마(,)로 구분할 수 있습니다.
                                </div>
                            </div>
                        </div>
                        <div class="input-wrap mt-0">
                            <label class="label">상품노출시간</label>
                            <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue" dateFormat="yy/mm/dd" placeholder="yyyy/mm/dd"></Calendar>
                        </div>
                        <div class="grid mt-0">
                            <div class="col-12 md:col-5">
                                <div class="input-wrap">
                                    <label class="label">상품대표색상</label>
                                    <div class="color-wrap" v-for="colorListItem in colorList" :key="colorListItem">
                                        <ColorPicker style="width: 2rem" v-model="colorValue" />
                                        <button type="button" class="btn btn-delete mr-2">&times;</button>
                                    </div>
                                    <Button label="Add" class="ml-2" @click="colorList.push('color')" />
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel header="추가정보">
                        <div class="grid mt-2">
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label">Manufacturer</label>
                                    <InputText type="text" placeholder="placeholder" class="wd-100"></InputText>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label">Dimensions</label>
                                    <InputText type="text" placeholder="placeholder" class="wd-100"></InputText>
                                </div>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label">Weight</label>
                                    <InputText type="text" placeholder="placeholder" class="wd-100"></InputText>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label">Material</label>
                                    <InputText type="text" placeholder="placeholder" class="wd-100"></InputText>
                                </div>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label">Color</label>
                                    <InputText type="text" placeholder="placeholder" class="wd-100"></InputText>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label">Ingredients</label>
                                    <InputText type="text" placeholder="placeholder" class="wd-100"></InputText>
                                </div>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label">Number of Items</label>
                                    <InputText type="text" placeholder="placeholder" class="wd-100"></InputText>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label">Warranty</label>
                                    <InputText type="text" placeholder="placeholder" class="wd-100"></InputText>
                                </div>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label">Additional<br />Information</label>
                                    <InputText type="text" placeholder="placeholder" class="wd-100"></InputText>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label">유통기한</label>
                                    <InputText type="text" placeholder="placeholder" class="wd-100"></InputText>
                                </div>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label">제조일</label>
                                    <InputText type="text" placeholder="placeholder" class="wd-100"></InputText>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label">출시일</label>
                                    <InputText type="text" placeholder="placeholder" class="wd-100"></InputText>
                                </div>
                            </div>
                        </div>
                        <div class="input-wrap mt-0">
                            <label class="label">추가항목</label>
                            <Button label="Add" />
                            <span class="ml-2">※ 상품 특성에 맞게 항목을 추가할 수 있습니다. (예. 감독, 저자, 출판사, 유통사, 상품영문명 등)</span>
                        </div>
                        <div class="grid mt-0">
                            <div class="col-10">
                                <div class="input-wrap">
                                    <label class="label"></label>
                                    <div class="table-wrap">
                                        <table class="table">
                                            <tr>
                                                <th>순서</th>
                                                <th>내용</th>
                                                <th>항목</th>
                                                <th>삭제</th>
                                            </tr>
                                            <tr v-for="item in 3" :key="item">
                                                <td>{{ item }}</td>
                                                <td>
                                                    <InputText type="text" placeholder="placeholder" class="wd-100"></InputText>
                                                </td>
                                                <td>
                                                    <InputText type="text" placeholder="placeholder" class="wd-100"></InputText>
                                                </td>
                                                <td><Button label="Delete" severity="danger" /></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel header="판매정보">
                        <div class="grid mt-2">
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label">판매 재고</label>
                                    <div class="field-radiobutton mb-0">
                                        <RadioButton id="sale" name="sale" value="1" v-model="radioValueSale" />
                                        <label for="sale">무한정 판매</label>
                                    </div>
                                    <div class="field-radiobutton mb-0">
                                        <RadioButton id="sale2" name="sale" value="2" v-model="radioValueSale" />
                                        <label for="sale2">재고량에 따름</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label">상품 재고</label>
                                    <InputText type="text" class="mr-2 wd-sm"></InputText>개
                                </div>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label">묶음주문 단위</label>
                                    <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Select" />
                                    <InputText type="text" class="mr-2 ml-2 wd-sm"></InputText>개 단위로 주문 및 장바구니에 담김
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label">품절 상태</label>
                                    <div class="field-radiobutton mb-0">
                                        <RadioButton id="soldOut" name="soldOut" value="1" v-model="radioValueSoldOut" />
                                        <label for="soldOut">정상</label>
                                    </div>
                                    <div class="field-radiobutton mb-0">
                                        <RadioButton id="soldOut2" name="soldOut" value="2" v-model="radioValueSoldOut" />
                                        <label for="soldOut2">품절(수동)</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="input-wrap mt-0">
                            <label class="label">구매수량 설정</label>
                            <div class="field-radiobutton mb-0">
                                <RadioButton id="saleQuantity" name="saleQuantity" value="1" v-model="radioValueSaleQuantity" />
                                <label for="saleQuantity">제한없음</label>
                            </div>
                            <div class="field-radiobutton mb-0">
                                <RadioButton id="saleQuantity2" name="saleQuantity" value="2" v-model="radioValueSaleQuantity" />
                                <label for="saleQuantity2">
                                    <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Select" :disabled="radioValueSaleQuantity == '1'" />
                                    <span class="ml-2">최소 구매 수량 : </span>
                                    <InputText type="text" class="wd-sm" :disabled="radioValueSaleQuantity == '1'"></InputText>
                                    <span class="ml-2">개 / 최대 구매 수량 : </span>
                                    <InputText type="text" class="wd-sm" :disabled="radioValueSaleQuantity == '1'"></InputText>
                                    <span class="ml-2">개</span>
                                </label>
                            </div>
                        </div>
                        <div class="input-wrap">
                            <label class="label">판매기간</label>
                            <div class="field-radiobutton mb-0">
                                <RadioButton id="salePeriod" name="salePeriod" value="1" v-model="radioValueSalePeriod" />
                                <label for="salePeriod">제한없음</label>
                            </div>
                            <div class="field-radiobutton mb-0">
                                <RadioButton id="salePeriod2" name="salePeriod" value="2" v-model="radioValueSalePeriod" />
                                <label for="salePeriod2">
                                    <span class="mr-2">시작일 / 종료일</span>
                                    <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue" :disabled="radioValueSalePeriod == '1'"></Calendar>
                                    <span class="ml-2 mr-2">~</span>
                                    <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue" :disabled="radioValueSalePeriod == '1'"></Calendar>
                                </label>
                            </div>
                        </div>
                        <div class="input-wrap">
                            <label class="label">재입고 알림</label>
                            <div class="field-checkbox mb-0">
                                <Checkbox id="restock" name="restock" value="Yes" v-model="checkboxValueRestock" />
                                <label for="restock">상품 재입고 알림 사용</label>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel header="할인/혜택">
                        <div class="grid mt-2">
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label">정가</label>
                                    <InputText type="text" placeholder="placeholder"></InputText>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label">판매가</label>
                                    <InputText type="text" placeholder="placeholder"></InputText>
                                    <strong class="ml-2">0.0% DC</strong>
                                </div>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label">타임딜</label>
                                    <div class="field-checkbox mb-0">
                                        <Checkbox id="timedeal" name="timedeal" value="Yes" v-model="checkboxValueTimedeal" />
                                        <label for="timedeal">Yes</label>
                                    </div>
                                </div>
                                <div class="input-wrap mt-0">
                                    <label class="label"></label>
                                    <p>*time deal 은 상품 노출시간으로부터 하루 전 시작됩니다.<br />
                                    *이미 노출된 상품은 타임딜이 불가합니다.</p>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-wrap">
                                    <label class="label">타임딜 판매가</label>
                                    <InputText type="text" placeholder="placeholder" :disabled="checkboxValueTimedeal != 'Yes'"></InputText>
                                    <strong class="ml-2">0.0% DC</strong>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel header="옵션설정">
                        <div class="input-wrap mt-2">
                            <label class="label">옵션사용</label>
                            <div class="field-radiobutton mb-0">
                                <RadioButton id="option5" name="option5" value="Yes" v-model="radioValue3" />
                                <label for="option5">Yes</label>
                            </div>
                            <div class="field-radiobutton mb-0">
                                <RadioButton id="option6" name="option5" value="No" v-model="radioValue3" />
                                <label for="option6">No</label>
                            </div>
                        </div>
                        <div class="input-wrap">
                            <label class="label">옵션설정</label>
                            <Button label="옵션수정(3개)" @click="optionAddModal = true" />
                            <Dialog header="옵션등록" v-model:visible="optionAddModal" :modal="true">
                                <Button label="추가하기" />
                                <div class="table-wrap mt-4">
                                    <table class="table">
                                        <tr>
                                            <th>옵션명</th>
                                            <th>옵션설명</th>
                                            <th>가격</th>
                                            <th>이미지</th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <InputText type="text" placeholder="placeholder"></InputText>
                                            </td>
                                            <td>
                                                <InputText type="text" placeholder="placeholder"></InputText>
                                            </td>
                                            <td>
                                                <InputText type="text" placeholder="placeholder"></InputText>
                                            </td>
                                            <td>
                                                <FileUpload mode="basic" name="demo[]" accept="image/*" :maxFileSize="1000000" @uploader="onUpload" :auto="true" customUpload />
                                            </td>
                                            <td>
                                                <Button label="삭제" severity="danger" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>베이지색<br /><span class="text-grey">CP00001</span></td>
                                            <td>베이지색입니다 노출 안돼요</td>
                                            <td>$44.4</td>
                                            <td>
                                                <img class="thumb-img" src="https://images.khan.co.kr/article/2023/08/29/news-p.v1.20230828.53498d1b40ad4d52b31987dac9454409_P1.jpg" />
                                            </td>
                                            <td>
                                                <Button label="삭제" severity="danger" />
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <template #footer>
                                    <Button label="저장하기" @click="optionAddModal = false" icon="pi pi-check" class="p-button-outlined" />
                                </template>
                            </Dialog>
                        </div>
                    </TabPanel>
                    <TabPanel header="이미지">
                        <div class="input-wrap mt-2">
                            <label class="label">원본이미지</label>
                            <div class="upload-custom">
                                <FileUpload name="demo[]" @uploader="onUpload" :multiple="true" accept="image/*" :maxFileSize="1000000" customUpload />
                            </div>
                        </div>
                        <div class="input-wrap">
                            <label class="label">확대이미지</label>
                            <div class="upload-custom">
                                <FileUpload name="demo[]" @uploader="onUpload" :multiple="true" accept="image/*" :maxFileSize="1000000" customUpload />
                            </div>
                        </div>
                        <div class="input-wrap">
                            <label class="label">썸네일이미지</label>
                            <div class="upload-custom">
                                <FileUpload name="demo[]" @uploader="onUpload" :multiple="true" accept="image/*" :maxFileSize="1000000" customUpload />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel header="상세정보">
                        <div class="grid mt-2">
                            <div class="col-10">
                                <div class="input-wrap">
                                    <label class="label">짧은설명</label>
                                    <InputText type="text" placeholder="placeholder" class="wd-100"></InputText>
                                </div>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="col-10">
                                <div class="input-wrap">
                                    <label class="label">상세설명</label>
                                    <vue-editor v-model="content" class="wd-100"></vue-editor>
                                </div>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="col-10">
                                <div class="input-wrap">
                                    <label class="label">배송안내</label>
                                    <vue-editor v-model="content2" class="wd-100"></vue-editor>
                                </div>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="col-10">
                                <div class="input-wrap">
                                    <label class="label">AS안내</label>
                                    <vue-editor v-model="content3" class="wd-100"></vue-editor>
                                </div>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="col-10">
                                <div class="input-wrap">
                                    <label class="label">환불안내</label>
                                    <vue-editor v-model="content4" class="wd-100"></vue-editor>
                                </div>
                            </div>
                        </div>
                        <div class="grid">
                            <div class="col-10">
                                <div class="input-wrap">
                                    <label class="label">교환안내</label>
                                    <vue-editor v-model="content5" class="wd-100"></vue-editor>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </TabView>
                <div class="btn-wrap mt-0">
                    <Button label="등록" class="lg" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { VueEditor } from "vue3-editor";
import { useToast } from 'primevue/usetoast';

export default {
    data() {
        return {
            dropdownValues: ref([
                { name: 'select1', code: '1' },
                { name: 'select2', code: '2' },
                { name: 'select3', code: '3' },
            ]),
            dropdownValue: ref(null),
            radioValue: 'Yes',
            radioValue2: 'Yes',
            radioValue3: 'Yes',
            radioValueSale: '1',
            checkboxValue: '',
            checkboxValue2: '',
            calendarValue: '',
            colorValue: '#000000',
            content: '',
            content2: '',
            content3: '',
            content4: '',
            content5: '',
            toast: useToast(),
            colorList: ['color'],
            checkboxValueTimedeal: '',
            radioValueSoldOut: '1',
            radioValueSaleQuantity: '1',
            radioValueSalePeriod: '1',
            checkboxValueRestock: '',
            searchModal: false,
            optionAddModal: false,
        };
    },
  components: {
    VueEditor
  },
  created(){},
  mounted(){},
  methods: {
    onUpload: () => {
        this.toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    },
  },
};
</script>


<style>

</style>