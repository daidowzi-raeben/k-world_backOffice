<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h4><strong>직원 등록</strong></h4>
                <div class="input-wrap">
                    <label class="label">식별코드</label>
                    <InputText type="text" placeholder="placeholder" :disabled="true"></InputText>
                </div>
                <div class="input-wrap">
                    <label class="label">아이디</label>
                    <InputText type="text" placeholder="placeholder" @change="onChangeIsValue('mb_id', $event)"></InputText>
                </div>
                <div class="input-wrap">
                    <label class="label">패스워드</label>
                    <InputText type="password" placeholder="placeholder" @change="onChangeIsValue('mb_pw', $event)"></InputText>
                </div>
                <div class="input-wrap">
                    <label class="label">연락처</label>
                    <Listbox v-model="listboxValue" :options="listboxValues" optionLabel="name" :filter="true" />
                    <InputText type="text" class="ml-3" placeholder="placeholder" @change="onChangeIsValue('mb_cell', $event)"></InputText>
                </div>
                <div class="input-wrap">
                    <label class="label">이메일</label>
                    <InputText type="text" placeholder="placeholder" @change="onChangeIsValue('mb_email', $event)"></InputText>
                </div>
                <div class="input-wrap">
                    <label class="label">성별</label>
                    <RadioButton id="option1" name="option" value="m" v-model="formData.mb_gender" />
                    <label for="option1">male</label>
                    <RadioButton id="option2" name="option" value="f" v-model="formData.mb_gender" />
                    <label for="option2">female</label>
                    <RadioButton id="option3" name="option" value="x" v-model="formData.mb_gender" />
                    <label for="option3">Prefer not to say</label>
                </div>
                <div class="input-wrap">
                    <label class="label">생년월일</label>
                    <Calendar :showIcon="true" :yearNavigator="true" :showButtonBar="true" v-model="calendarValue" dateFormat="yy/mm/dd" placeholder="yyyy/mm/dd"></Calendar>
                </div>
                <div class="input-wrap">
                    <label class="label">관리등급</label>
                    <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Select" @change="onChangeIsValue('mb_id', $event)" />
                </div>
                <div class="btn-wrap">
                    <Button label="등록" class="lg" />
                </div>
                {{ formData }}
                {{ calendarValue }}
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import countryList from '../../static/json/country.json';

export default {
    data() {
        return {
            dropdownValues: ref([
                { name: '권한없음', code: '1' },
                { name: '권한1', code: '2' }
            ]),
            dropdownValue: ref(null),
            radioValue: ref(null),
            calendarValue: ref(null),
            listboxValue: '',
            listboxValues: countryList,
            formData: {
                mb_gender: 'm',
                mb_birth: null
            }
        };
    },
    components: {},
    created() {},
    mounted() {},
    methods: {
        onChangeIsValue(param, v) {
            console.log(param, v);
            this.formData[param] = v?.target?.value;
        },
        isSubmit() {
            this.axios
                .post(`${import.meta.env.VITE_API_URL}/user.php`, {
                    firstName: 'Fred',
                    lastName: 'Flintstone'
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
};
</script>


<style>
</style>