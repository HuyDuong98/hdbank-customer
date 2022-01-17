import { FC } from 'react'
import Style from '../../styles/account/RegisterForm.module.scss'
import clsx from 'clsx'
import { colour } from '../../config/colours'
import { Grid, StepLabel, Stepper, Step, makeStyles, withStyles, StepConnector, StepIconProps } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

interface IStep {
  main: string
  sub: string
}

interface ICustomStepperProps {
  activeStep: number
  steps: IStep[]
  cssClass?: string
  completedStep?: number
  onStepClick: (step: number) => void
}

const useStepperStyles = makeStyles({
  root: {
    padding: 0,
    width: 'fit-content',
    margin: 'auto',
  },
})

const CustomStepConnector = withStyles({
  active: {
    '& $line': {
      borderColor: colour.complementary01,
    },
  },
  completed: {
    '& $line': {
      borderColor: colour.complementary01,
    },
  },
  line: {
    borderColor: colour.connectorLine,
    borderLeftWidth: 3,
    borderRadius: 1,
    minHeight: 80,
  },
  vertical: {
    padding: 0,
    marginLeft: 21,
  },
})(StepConnector)

const useStepLabelStyles = makeStyles({
  root: {
    height: 44,
    alignItems: 'flex-start',
    fontSize: 16,
  },
  active: {
    color: `${colour.primary02} !important`,
  },
  completed: {
    color: `${colour.complementary01} !important`,
  },
})

const RegisterStepper: FC<ICustomStepperProps> = (props) => {
  const { activeStep, steps, cssClass, completedStep, onStepClick } = props
  const stepperStyles = useStepperStyles()
  const stepLabelClasses = useStepLabelStyles()
  const { t } = useTranslation()

  const stepIcon = (stepIconProps: StepIconProps) => {
    const { active, completed } = stepIconProps

    return (
      <div
        className={clsx(Style.stepIconRootWrapper, {
          [Style.active]: active,
          [Style.completed]: completed,
        })}
      >
        <div
          className={clsx(Style.stepIconWrapper, {
            [Style.active]: active,
            [Style.completed]: completed,
          })}
        >
          {stepIconProps.icon}
        </div>
      </div>
    )
  }

  return (
    <Grid container justifyContent="center" className={cssClass}>
      <Grid item xs={12} lg={10}>
        <Stepper
          orientation="vertical"
          activeStep={activeStep}
          classes={{ root: stepperStyles.root }}
          connector={<CustomStepConnector />}
        >
          {steps.map((step, index) => {
            const stepProps: { completed?: boolean } = {}

            if (completedStep && activeStep === completedStep) stepProps.completed = true

            return (
              <Step key={index} {...stepProps}>
                <StepLabel
                  classes={{
                    root: stepLabelClasses.root,
                    active: stepLabelClasses.active,
                    completed: stepLabelClasses.completed,
                  }}
                  StepIconComponent={stepIcon}
                  onClick={() => {
                    index < activeStep && onStepClick(index)
                  }}
                >
                  <div className={Style.stepName}>
                    <span className={Style.mainStep}>{t(`${step.main}`)}</span>
                    <span className={Style.subStep}>{t(`${step.sub}`)}</span>
                  </div>
                </StepLabel>
              </Step>
            )
          })}
        </Stepper>
      </Grid>
    </Grid>
  )
}

export default RegisterStepper
