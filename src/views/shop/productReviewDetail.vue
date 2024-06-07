<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h4><strong>상품후기</strong></h4>
                <div class="input-wrap">
                    <label class="label">상품명</label>
                    <InputText type="text" placeholder="placeholder" :disabled="true"></InputText>
                </div>
                <div class="input-wrap">
                    <label class="label">이름</label>
                    <InputText type="text" placeholder="placeholder" :disabled="true"></InputText>
                </div>
                <div class="input-wrap">
                    <label class="label">평점</label>
                    <Rating v-model="ratingValue" readonly />
                    <span class="ml-2">{{ ratingValue }}</span>
                </div>
                <div class="input-wrap">
                    <label class="label">제목</label>
                    <InputText type="text" placeholder="placeholder"></InputText>
                </div>
                <div class="input-wrap">
                    <label class="label">내용</label>
                    <Textarea inputId="textarea" rows="3" cols="60" :autoResize="true" v-model="value"></Textarea>
                </div>
                <div class="input-wrap">
                    <label class="label">답변제목</label>
                    <InputText type="text" placeholder="placeholder"></InputText>
                </div>
                <div class="input-wrap">
                    <label class="label">답변내용</label>
                    <Textarea inputId="textarea" rows="3" cols="60" :autoResize="true" v-model="value2"></Textarea>
                </div>
                <div class="input-wrap">
                    <label class="label">확인</label>
                    <RadioButton id="option1" name="option" value="Yes" v-model="radioValue" />
                    <label for="option1">예</label>
                    <RadioButton id="option2" name="option" value="No" v-model="radioValue" />
                    <label for="option2">아니오</label>
                </div>

                <div class="btn-wrap">
                    <Button label="목록" severity="secondary" class="lg" />
                    <Button label="확인" class="lg" />
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
        value: '후기입니다',
        value2: '',
        radioValue: ref('Yes'),
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