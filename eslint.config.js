import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
  
  {
    files: ['**/*.{js,mjs,cjs}'],
    rules: {
      ...pluginJs.configs.recommended.rules,
      'no-unused-vars': 1,
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      'quote-props': ['error', 'as-needed'],
      indent: ['error', 2],
      semi: ['error', 'never'],
      'comma-dangle': ['error', 'always-multiline'],
      'comma-spacing': ['error', { before: false, after: true }],
      'space-before-function-paren': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0, maxBOF: 0 }],
      'key-spacing': ['error', { mode: 'strict' }],
      'arrow-spacing': ['error', { before: true, after: true }],
      'object-curly-spacing': ['error', 'always'],
      'no-console': ['error', { allow: ['warn', 'error'] }], 
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/no-unused-vars': 1,
      'vue/attribute-hyphenation': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'never',
            normal: 'never',
            component: 'never',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      'vue/html-closing-bracket-newline': [
        'error',
        {
          singleline: 'never',
          multiline: 'never',
        },
      ],
      'vue/html-indent': [
        'error',
        'tab',
        {
          alignAttributesVertically: false,
        },
      ],
      'vue/require-v-for-key': 1,
      'vue/first-attribute-linebreak': [
        'error',
        {
          singleline: 'beside',
          multiline: 'ignore',
        },
      ],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: 3,
          multiline: 3,
        },
      ],
    },
  },
  { 
    languageOptions: { 
      globals: {
        ...globals.browser,
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        defineModel: 'readonly',
        defineSlots: 'readonly',
        defineOptions: 'readonly',
        definePage: 'readonly',
      },
    }, 
  },

  ...pluginVue.configs['flat/essential'],
]