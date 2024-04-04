export const validationInputLogin = {
    required: "required",
    minLength: {
      value: 6,
      message: "минимальная длина логина 6 символов",
    },
    maxLength: {
      value: 12,
      message: "максимальная длина 12 исмволов",
    },
}

export const validationInputPassword = {
    
        required: "required",
        pattern: {
          value: /^(?=.*[A-Z])(?=.*[0-9]).+$/,
          message:
            "в пароле должна быть хотя бы одна заглавная буква и одна цифра, и без знаков препинания",
        },
        minLength: {
          value: 8,
          message: "минимальная длина логина 8 символов",
        },
        maxLength: {
          value: 14,
          message: "максимальная длина 14 cимволов",
        },
      
}