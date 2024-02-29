// ** React Imports
import { ReactNode, useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box, { BoxProps } from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Styled Components
const RegisterIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  maxHeight: 600,
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(12),
  [theme.breakpoints.down(1540)]: {
    maxHeight: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxHeight: 500
  }
}))

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 450
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 600
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 750
  }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const Register = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

  const theme = useTheme()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** Vars
  const { skin } = settings

  const imageSource = skin === 'bordered' ? 'auth-v2-register-illustration-bordered' : 'auth-v2-register-illustration'

  return (
    <Box className='content-right' sx={{ backgroundColor: 'background.paper' }}>
      {!hidden ? (
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            borderRadius: '20px',
            justifyContent: 'center',
            backgroundColor: 'customColors.bodyBg',
            margin: theme => theme.spacing(8, 0, 8, 8)
          }}
        >
          <RegisterIllustration
            alt='register-illustration'
            src={`/images/pages/${imageSource}-${theme.palette.mode}.png`}
          />
        </Box>
      ) : null}
      <RightWrapper>
        <Box
          sx={{
            p: [6, 12],
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Box sx={{ my: 6 }}>
              <Typography sx={{ mb: 1.5, fontWeight: 700, fontSize: 'calc(1.2875rem + 0.45vw)', lineHeight: 1.385 }}>
                관리자 회원가입 🚀
              </Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
              <TextField autoFocus fullWidth sx={{ mb: 6 }} label='아이디' placeholder='아이디' />
              <FormControl fullWidth sx={{ mb: 6 }}>
                <InputLabel htmlFor='password'>비밀번호</InputLabel>
                <OutlinedInput
                  label='비밀번호'
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onMouseDown={e => e.preventDefault()}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <Icon icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} fontSize={20} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl fullWidth sx={{ mb: 6 }}>
                <InputLabel htmlFor='password-confirm'>비밀번호 확인</InputLabel>
                <OutlinedInput
                  label='비밀번호 확인'
                  id='password-confirm'
                  type={showConfirmPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onMouseDown={e => e.preventDefault()}
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        <Icon icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} fontSize={20} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 4 }}>
                회원가입
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ color: 'text.secondary', mr: 2, fontWeight: 500 }}>
                  이미 계정이 있으신가요?
                </Typography>
                <Typography variant='body2'>
                  <LinkStyled href='/login' sx={{ fontSize: '1rem' }}>
                    로그인 하러 가기
                  </LinkStyled>
                </Typography>
              </Box>
            </form>
          </Box>
        </Box>
      </RightWrapper>
    </Box>
  )
}

Register.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

Register.guestGuard = true

export default Register
