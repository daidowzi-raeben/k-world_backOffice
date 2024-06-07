<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h4><strong>회원 등록</strong></h4>
                <div class="input-wrap">
                    <label class="label">식별코드</label>
                    <InputText type="text" placeholder="placeholder" :disabled="true"></InputText>
                </div>
                <div class="input-wrap">
                    <label class="label">가입경로</label>
                    <InputText type="text" placeholder="placeholder" :disabled="true"></InputText>
                </div>
                <div class="input-wrap">
                    <label class="label">아이디</label>
                    <InputText type="text" placeholder="placeholder"></InputText>
                </div>
                <div class="input-wrap">
                    <label class="label">패스워드</label>
                    <InputText type="text" placeholder="placeholder"></InputText>
                </div>
                <div class="input-wrap">
                    <label class="label">연락처</label>
                    <InputText type="text" placeholder="placeholder"></InputText>
                </div>
                <div class="input-wrap">
                    <label class="label">이메일</label>
                    <InputText type="text" placeholder="placeholder"></InputText>
                </div>
                <div class="input-wrap">
                    <label class="label">성별</label>
                    <RadioButton id="option1" name="option" value="Yes" v-model="radioValue" />
                    <label for="option1">남</label>
                    <RadioButton id="option2" name="option" value="No" v-model="radioValue" />
                    <label for="option2">여</label>
                    <RadioButton id="option3" name="option" value="none" v-model="radioValue" />
                    <label for="option3">Prefer not to say</label>
                </div>
                <div class="input-wrap">
                    <label class="label">생년월일</label>
                    <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue"></Calendar>
                </div>
                <div class="input-wrap">
                    <label class="label">회원등급</label>
                    <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Select" />
                </div>
                <div class="btn-wrap">
                    <Button label="등록" class="lg" />
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
            { name: '권한없음', code: '1' },
            { name: '권한1', code: '2' },
        ]),
        dropdownValue: ref(null),
        radioValue: ref(null),
        calendarValue: ref(null),
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