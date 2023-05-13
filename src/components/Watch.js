import React, { useMemo, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import HousesGroup from './HousesGroup';
import getData from '../utils/getData';
import FullScreenHouseSlider from './sliders/FullScreenHouseSlider';
import ContentBlock from './ContentBlock';
import getPublicPath from '../utils/getPublicPath';
import splitText from '../utils/splitText';
import ModalScreen from '../components/ModalScreen';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import location from '../assets/images/icons/location.svg';
import validateText from '../utils/validateText';
import playButton from '../assets/images/icons/playButton.svg';
import { Fragment } from 'react';
import Instagram from './svg/icons/Instagram';
import Phone from './svg/icons/Phone';

const useStyles = makeStyles((theme) => ({
  BlockFullscreen: {
    position: 'relative',
    // marginBottom: '120px',
    '@media (min-width:1921px)': {
      // marginBottom: '8.3vw',
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '0',
    },
    '& h1': {
      '@media (min-width:1280px) and (max-width:1564px)': {
        width: '34vw',
      },
    },
  },
  herobox: {
    '& .sliderWrapper + div > div:first-child': {
      '@media (min-width:1280px)': {
        position: 'absolute',
        top: 'calc(-100vh + 80px + 54px + 50px)',
        bottom: '0',
        right: '0',
        textAlign: 'right',
        paddingRight: '10vw',
        paddingTop: '0!important',
        margin: '0!important',
        height: '1px',
        '& h1': {
          textAlign: 'right',
          position: 'absolute',
          top: '100%',
          right: '10vw',
          float: 'right',
          fontSize: '2.2vw',
          width: '30vw',
          '&:before': {
            content: '""',
            backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODQiIGhlaWdodD0iMTM5IiB2aWV3Qm94PSIwIDAgODQgMTM5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTc5LjQxNDcgMTAzLjgyNEM3OS40MTQ3IDEwNS45NzQgNzkuMzkwOSAxMDcuNzMzIDc5LjM2MTkgMTA3LjczM0M3OS4zMzI5IDEwNy43MzMgNzkuMjY4OSAxMDcuNjU3IDc5LjIxOTcgMTA3LjU2NUM3OS4wNTQ4IDEwNy4yNTcgNzguMzgyIDEwNi43MTIgNzcuODU5NiAxMDYuNDY0Qzc2Ljk4MjggMTA2LjA0OCA3Ni42NjQzIDEwNS45ODUgNzUuNDc5NSAxMDUuOTg5Qzc0LjUyODkgMTA1Ljk5MyA3NC4zODA3IDEwNi4wMDkgNzMuODc0NCAxMDYuMTY0QzcyLjI4NSAxMDYuNjUyIDcxLjA3MTUgMTA3LjY2OSA3MC4yNTgxIDEwOS4xOTRDNjkuOTEwNiAxMDkuODQ2IDY5LjY5NTcgMTEwLjQ2NCA2OS41MDY4IDExMS4zNTVDNjkuMzA0NiAxMTIuMzA5IDY5LjMwMzEgMTE0LjA4MiA2OS41MDM3IDExNS4wMjRDNjkuODE0OSAxMTYuNDg3IDcwLjM0OTkgMTE3LjU2NSA3MS4yMjUzIDExOC40OTVDNzIuOTA0NCAxMjAuMjc5IDc1LjQ2MzMgMTIwLjczNyA3Ny42Nzc3IDExOS42NDlDNzguMzM1NyAxMTkuMzI2IDc5LjA0MDkgMTE4LjcxOCA3OS40NTI3IDExOC4xMThMNzkuNzAwMyAxMTcuNzU3TDc5Ljc0NTkgMTE4LjA5OUM3OS43NzExIDExOC4yODcgNzkuODA5NiAxMTguNzc3IDc5LjgzMTYgMTE5LjE4OEw3OS44NzE1IDExOS45MzVIODEuNDI2NEg4Mi45ODEzTDgyLjk0MDggMTE5LjYwMUM4Mi45MTg0IDExOS40MTcgODIuODg0OCAxMTQuOTEzIDgyLjg2NiAxMDkuNTkyTDgyLjgzMiA5OS45MTZIODEuMTIzM0g3OS40MTQ3VjEwMy44MjRaTTYuNDEwMzMgMTA2LjA3OUM1Ljc1MjUyIDEwNi4yNDYgNS4yMDczIDEwNi40ODIgNC42OTkyOCAxMDYuODE5QzQuMjYyNDcgMTA3LjEwOSAzLjYzNDggMTA3LjczNyAzLjQyMTk4IDEwOC4wOThDMy4zNTUwMiAxMDguMjEyIDMuMjc4NTQgMTA4LjMwNSAzLjI1MjEzIDEwOC4zMDVDMy4yMjU2NyAxMDguMzA1IDMuMTg1MTEgMTA4LjA0IDMuMTYyMDcgMTA3LjcxN0MzLjEzODk2IDEwNy4zOTQgMy4xMDIzNCAxMDYuOTIyIDMuMDgwNyAxMDYuNjY4TDMuMDQxMzUgMTA2LjIwOEgxLjUyMDdIMEwwLjAzNzc2MzUgMTA2LjU0MUMwLjA1ODU4MiAxMDYuNzI1IDAuMDkzMTczNyAxMDkuODEzIDAuMTE0NjI3IDExMy40MDVMMC4xNTM2NjUgMTE5LjkzNUgxLjg5MDI0SDMuNjI2ODFMMy42NDQzMiAxMTUuNDM1TDMuNjYxODQgMTEwLjkzNUwzLjkwNjcxIDExMC40MzlDNC41OTYyIDEwOS4wNDMgNi4wNjg0OCAxMDguNDIxIDcuNDU1MDcgMTA4Ljk0QzguMTY1ODggMTA5LjIwNiA4LjY5ODY2IDEwOS45MjYgOC45NDE0NCAxMTAuOTQ4QzkuMDMxNDQgMTExLjMyNiA5LjA0OTQgMTExLjk3NyA5LjA3MTYyIDExNS42NjFMOS4wOTczOSAxMTkuOTM1SDEwLjgwNjdIMTIuNTE2MVYxMTUuNTY0QzEyLjUxNjEgMTEyLjg4NyAxMi40OTAyIDExMC45ODQgMTIuNDQ5MiAxMTAuNjU1QzEyLjI1NTggMTA5LjA5NiAxMS42MTY3IDEwNy43NDUgMTAuNzI3OCAxMDcuMDE1QzEwLjI3MiAxMDYuNjQyIDkuNzIzNjYgMTA2LjM0IDkuMTgzODMgMTA2LjE2N0M4LjQ3MTE4IDEwNS45MzggNy4xMzExNyAxMDUuODk2IDYuNDEwMzMgMTA2LjA3OVpNMjEuMTk5OCAxMDYuMDE4QzE4LjgyNzQgMTA2LjM5MiAxNy4wMDc1IDEwNy43MDcgMTYuMDY4NCAxMDkuNzI3QzE1LjI3NjMgMTExLjQzMSAxNS4xNDAxIDExMy44MDggMTUuNzI2OSAxMTUuNjg4QzE2LjU5ODggMTE4LjQ4IDE5LjA2NiAxMjAuMjA0IDIyLjE5NTQgMTIwLjIwOUMyNS4zOTUyIDEyMC4yMTMgMjcuODg0NSAxMTguNTE3IDI4LjgyNTcgMTE1LjY5MkMyOS4xODIxIDExNC42MjIgMjkuMzI2NiAxMTMuMjk4IDI5LjIwOSAxMTIuMTc4QzI4LjkzMTQgMTA5LjUzNSAyNy43MjcyIDEwNy42NzkgMjUuNjIgMTA2LjY0NkMyNC42MzYgMTA2LjE2MyAyMy45NDYgMTA2LjAxIDIyLjYzOTcgMTA1Ljk4M0MyMi4wNDYzIDEwNS45NzEgMjEuMzk4MyAxMDUuOTg3IDIxLjE5OTggMTA2LjAxOFpNMzguMjUzNiAxMDYuMDQ5QzM3LjA5MSAxMDYuMzA5IDM2LjA0ODUgMTA3LjAwNSAzNS4zOTIzIDEwNy45NTlDMzUuMjMyNSAxMDguMTkxIDM1LjEzNjQgMTA4LjI4MiAzNS4xMDc2IDEwOC4yMjhDMzUuMDgzNiAxMDguMTgzIDM1LjA0NDMgMTA3Ljc3NCAzNS4wMjAyIDEwNy4zMkMzNC45OTYgMTA2Ljg2NSAzNC45NjA4IDEwNi40MjkgMzQuOTQyIDEwNi4zNTFMMzQuOTA3NiAxMDYuMjA4SDMzLjQxNjJDMzIuMDE4MyAxMDYuMjA4IDMxLjkyNzkgMTA2LjIxNSAzMS45NzYzIDEwNi4zMTlDMzIuMDA0NyAxMDYuMzggMzIuMDM4NSAxMDkuNDY5IDMyLjA1MTUgMTEzLjE4MkwzMi4wNzUyIDExOS45MzVIMzMuNzQ5M0gzNS40MjM1TDM1LjQ0MjIgMTE1LjU2NUwzNS40NjA5IDExMS4xOTZMMzUuNjI0NiAxMTAuNzc2QzM1Ljk3OTUgMTA5Ljg2MyAzNi40MjQ1IDEwOS4zMzggMzcuMTQwNSAxMDguOTg1QzM3LjUxMTkgMTA4LjgwMiAzNy42MDk2IDEwOC43ODEgMzguMTI1NCAxMDguNzgxQzM4LjYyMjUgMTA4Ljc4MSAzOC43NDUxIDEwOC44MDUgMzkuMDU2IDEwOC45NTdDMzkuNDg4MyAxMDkuMTcgMzkuODkyMSAxMDkuNTkyIDQwLjEwMjIgMTEwLjA1MkM0MC40MzIgMTEwLjc3MyA0MC40NDExIDExMC45MjEgNDAuNDQyMyAxMTUuNTk3TDQwLjQ0MzQgMTE5LjkzNUg0Mi4xNTcxSDQzLjg3MDhWMTE1LjYyNUM0My44NzA4IDExMi43OTUgNDMuODk0NSAxMTEuMTg1IDQzLjkzOTggMTEwLjkzOEM0NC4xNDU3IDEwOS44MTIgNDUuMTYzNyAxMDguODYyIDQ2LjI2MjYgMTA4Ljc3QzQ3LjQ3NyAxMDguNjY4IDQ4LjMyOTEgMTA5LjM2MyA0OC43MzExIDExMC43ODNDNDguODM4NSAxMTEuMTYzIDQ4Ljg0OTcgMTExLjU1MiA0OC44Njk0IDExNS41NjVMNDguODkwOCAxMTkuOTM1SDUwLjU3MjlINTIuMjU1TDUyLjIzMTkgMTE1LjE1MkM1Mi4yMDk4IDExMC41NTcgNTIuMjAzOCAxMTAuMzQ5IDUyLjA3NjEgMTA5LjgzQzUxLjU5MTggMTA3Ljg2IDUwLjYxOTUgMTA2LjY1OCA0OS4xMTIxIDEwNi4xNjZDNDguMTQ0NSAxMDUuODUxIDQ2LjgyMzkgMTA1Ljg5MiA0NS44MjI2IDEwNi4yN0M0NS4wMTMzIDEwNi41NzUgNDMuODg0IDEwNy40ODYgNDMuMzk0OSAxMDguMjI5TDQzLjIxNDcgMTA4LjUwMkw0My4wMDMgMTA4LjEwMUM0Mi40NTMzIDEwNy4wNTggNDEuNTgwMiAxMDYuMzYzIDQwLjQ1ODkgMTA2LjA3NkMzOS44OSAxMDUuOTMxIDM4Ljg0MDIgMTA1LjkxNyAzOC4yNTM2IDEwNi4wNDlaTTU5LjY3NTEgMTA1Ljk5OEM1OS4xOTEyIDEwNi4wNDkgNTguMzQ1MiAxMDYuMjIxIDU3LjgwMjcgMTA2LjM3N0M1Ny4zMzY5IDEwNi41MTEgNTYuMTEwNSAxMDcuMDIzIDU2LjAwNzggMTA3LjEyNkM1NS45OTM0IDEwNy4xNCA1Ni4xMzA3IDEwNy42NTEgNTYuMzEyOSAxMDguMjYxTDU2LjY0NDEgMTA5LjM3TDU3LjIyNTcgMTA5LjA5NEM1OC43NzA5IDEwOC4zNjEgNjAuNzk2MiAxMDguMTggNjEuODY0OSAxMDguNjc5QzYyLjY5OTcgMTA5LjA2OCA2My4wMjM4IDEwOS41NyA2My4xMjY1IDExMC42MzFMNjMuMTU3OCAxMTAuOTU0TDYyLjIyNTcgMTEwLjk5NUM1OC43NCAxMTEuMTQ1IDU2LjM4NzcgMTEyLjIwNiA1NS40OTQ2IDExNC4wM0M1NS4xMjMzIDExNC43ODggNTUuMDE4NCAxMTUuMjUgNTUuMDE5MSAxMTYuMTIyQzU1LjAyMDIgMTE3LjM0OSA1NS4zNTgyIDExOC4xNzIgNTYuMjA4NSAxMTkuMDE2QzU3LjA2MTQgMTE5Ljg2MyA1Ny45OTggMTIwLjIxOSA1OS4zNTc4IDEyMC4yMTJDNjAuODIyMSAxMjAuMjA0IDYyLjAyMTEgMTE5LjczNCA2My4wMTUxIDExOC43NzhDNjMuMjMwOSAxMTguNTcxIDYzLjQyMTUgMTE4LjQyNSA2My40Mzg1IDExOC40NTNDNjMuNDU1NyAxMTguNDgxIDYzLjUwMzIgMTE4Ljc3NiA2My41NDQzIDExOS4xMDhDNjMuNTg1MyAxMTkuNDQgNjMuNjMzMSAxMTkuNzYyIDYzLjY1MDYgMTE5LjgyM0M2My42Nzk3IDExOS45MjUgNjMuODEwNyAxMTkuOTM1IDY1LjIzMzcgMTE5LjkzNUg2Ni43ODVMNjYuNzQ3NCAxMTkuNTY5QzY2LjcyNjggMTE5LjM2OCA2Ni42OTMyIDExOS4xNjEgNjYuNjcyOCAxMTkuMTA4QzY2LjY1MjUgMTE5LjA1NiA2Ni42MTU5IDExNy4wODMgNjYuNTkxNiAxMTQuNzIzQzY2LjU1MzEgMTEwLjk5NCA2Ni41MzMxIDExMC4zNzEgNjYuNDM3OSAxMDkuOTU3QzY1LjgxMTkgMTA3LjIzMyA2My45Nzg3IDEwNS45MjkgNjAuODIyMyAxMDUuOTY0QzYwLjMxMzUgMTA1Ljk2OSA1OS43OTczIDEwNS45ODQgNTkuNjc1MSAxMDUuOTk4Wk0yMy4yNzUzIDEwOC42MjNDMjQuMzM0NSAxMDguOTg4IDI1LjA5OTQgMTA5LjkyOSAyNS40Njg4IDExMS4zMjNDMjUuNjc2NCAxMTIuMTA3IDI1LjcwODQgMTEzLjU5NyAyNS41MzU1IDExNC40MzdDMjUuMTEyNCAxMTYuNDk0IDIzLjkyMTEgMTE3LjcxIDIyLjMzMTEgMTE3LjcxQzIwLjIxMzkgMTE3LjcxIDE4LjgxOTMgMTE1LjY4MiAxOC45NDU5IDExMi43ODhDMTkuMDQxOCAxMTAuNTk0IDE5LjkyOTIgMTA5LjA4NiAyMS40MDEzIDEwOC42MTRDMjEuOTAyOCAxMDguNDU0IDIyLjc5NTkgMTA4LjQ1OCAyMy4yNzUzIDEwOC42MjNaTTc3LjA4NTcgMTA4LjcxN0M3OC4xMjkxIDEwOC45ODkgNzguOTA2NiAxMDkuNzQzIDc5LjI0MDggMTEwLjgwN0M3OS4zNzMgMTExLjIyOCA3OS4zODI5IDExMS4zNzcgNzkuMzgyOSAxMTIuOTQ0Qzc5LjM4MjkgMTE0Ljc3MiA3OS4zNTA3IDExNS4wMjIgNzkuMDI2MSAxMTUuNzA4Qzc4LjEyODQgMTE3LjYwOCA3NS41NTE1IDExOC4wMzEgNzQuMDQzMiAxMTYuNTI3QzczLjYxNTQgMTE2LjEwMSA3My4yMTI1IDExNS4zNzEgNzMuMDI5NyAxMTQuNjkyQzcyLjg5NDcgMTE0LjE5IDcyLjg0MDMgMTEyLjY3NiA3Mi45MzQ4IDExMi4wNTRDNzMuMTk5OCAxMTAuMzEzIDc0LjE4NDcgMTA5LjAzNSA3NS41MTEyIDEwOC43MTFDNzUuOTU1NCAxMDguNjAyIDc2LjY1NjEgMTA4LjYwNSA3Ny4wODU3IDEwOC43MTdaTTYzLjIxNyAxMTQuMjc5QzYzLjIzOTYgMTE1LjUxMiA2My4xNjA2IDExNS45MTQgNjIuNzgwMiAxMTYuNTAzQzYxLjgxOTggMTE3Ljk5MSA1OS4zNTIxIDExOC4xOCA1OC42NTg1IDExNi44MThDNTguNTkzMiAxMTYuNjkgNTguNTA3IDExNi4zOTcgNTguNDY3MSAxMTYuMTY4QzU4LjI2NDQgMTE1LjAwMyA1OC44OTYzIDExNC4wNTQgNjAuMTY4NiAxMTMuNjEzQzYwLjg5NDcgMTEzLjM2MiA2MS45OTU3IDExMy4yMDEgNjIuODQ4NyAxMTMuMjIxTDYzLjE5NzggMTEzLjIzTDYzLjIxNyAxMTQuMjc5Wk0wLjEzOTE5MiAxMzAuMzU3VjEzOC43NDZIMS44ODNIMy42MjY4N0wzLjY0NDMyIDEzNC4yMTRMMy42NjE4NCAxMjkuNjgzTDMuOTA1MzIgMTI5LjE5QzQuNTI5NTYgMTI3LjkyNSA1LjgyODYyIDEyNy4zMTMgNy4xNTQ2NiAxMjcuNjU5QzguMDg0NjQgMTI3LjkwMiA4LjY2MTc4IDEyOC41ODEgOC45NDIwNyAxMjkuNzY0QzkuMDMwMTcgMTMwLjEzNSA5LjA0ODgzIDEzMC44MTUgOS4wNzE1NSAxMzQuNDcyTDkuMDk4MDIgMTM4Ljc0NkgxMC44MTA0SDEyLjUyMjhMMTIuNDk5IDEzNC4wMjdDMTIuNDc3OCAxMjkuODE3IDEyLjQ2MzMgMTI5LjI1NyAxMi4zNjQ1IDEyOC44MzJDMTEuODU4NCAxMjYuNjUzIDEwLjc3NTQgMTI1LjM4NSA4Ljk5MzQyIDEyNC44ODRDOC4wMjAzNCAxMjQuNjEgNi43NDI5OCAxMjQuNzA2IDUuNzk3NzcgMTI1LjEyMkM1LjA3NjQ5IDEyNS40NCA0LjI1MTYxIDEyNi4xMDEgMy43OTAzMSAxMjYuNzMxTDMuNjMwMTEgMTI2Ljk1VjEyNC40NTlWMTIxLjk2OEgxLjg4NDY1SDAuMTM5MTkyVjEzMC4zNTdaTTIxLjQ1NTcgMTI0Ljc2OUMxNy42OTM1IDEyNS4yMzUgMTUuMzY5NSAxMjcuOTc4IDE1LjM3MzkgMTMxLjk0NkMxNS4zNzYyIDEzNC4wMzYgMTUuOTQ3NiAxMzUuNjMgMTcuMTYwNiAxMzYuOTNDMTguMTYyNCAxMzguMDA0IDE5LjM3MzEgMTM4LjYzMiAyMC45ODA4IDEzOC45MTNDMjEuNzM0MiAxMzkuMDQ0IDIzLjE2NDcgMTM4Ljk5OSAyMy45NDQ5IDEzOC44MTlDMjYuNzUyNyAxMzguMTY5IDI4LjYwNzkgMTM2LjE4NSAyOS4xMjI3IDEzMy4yOEMyOS4yNjM3IDEzMi40ODUgMjkuMjY0MSAxMzEuMDMxIDI5LjEyMzcgMTMwLjI1OEMyOC41OTk1IDEyNy4zNzYgMjYuNjc4MyAxMjUuMzg0IDIzLjkxODMgMTI0Ljg1OUMyMy4yNjMxIDEyNC43MzUgMjIuMDgwNCAxMjQuNjkxIDIxLjQ1NTcgMTI0Ljc2OVpNNTEuOTIzNyAxMjQuNzYyQzQ5LjY4NTUgMTI1LjA0OCA0OC4wOTI1IDEyNi4zNTMgNDcuNzE1MiAxMjguMjA5QzQ3LjQ2NjUgMTI5LjQzMyA0Ny43NDYzIDEzMC40NTMgNDguNTc0MyAxMzEuMzM5QzQ5LjIxOTcgMTMyLjAzIDQ5Ljk4MTggMTMyLjQ3NyA1MS41MTQyIDEzMy4wNjZDNTIuOTM0MSAxMzMuNjExIDUzLjQzMSAxMzMuOTg1IDUzLjU4MzggMTM0LjYyM0M1My43ODk1IDEzNS40ODEgNTMuMzIzMyAxMzYuMTc0IDUyLjM2OTcgMTM2LjQyOUM1MS40MzIxIDEzNi42NzggNDkuNzQ2MiAxMzYuNDExIDQ4LjQ1NTggMTM1LjgwN0M0OC4yMjA2IDEzNS42OTcgNDguMDAyNyAxMzUuNjA1IDQ3Ljk3MTYgMTM1LjYwM0M0Ny45MTcyIDEzNS42IDQ3LjMwMzcgMTM3Ljc4MSA0Ny4zIDEzNy45OUM0Ny4yOTg5IDEzOC4wNTggNDcuNDU1OSAxMzguMTYxIDQ3Ljc1ODQgMTM4LjI5MkM0OC43OTUyIDEzOC43MzkgNDkuNzU1OCAxMzguOTM3IDUxLjEwNjUgMTM4Ljk4M0M1My4zMjA0IDEzOS4wNTcgNTQuOTU5IDEzOC41MTEgNTYuMDA5OSAxMzcuMzQ4QzU2LjQwMjYgMTM2LjkxNCA1Ni42OTY4IDEzNi4zNjIgNTYuODQ1OCAxMzUuNzgxQzU2Ljk3MjQgMTM1LjI4OCA1Ni45NzQ2IDEzNC4yNjggNTYuODUwMiAxMzMuNzRDNTYuNTEwOCAxMzIuMjk4IDU1LjM1MTIgMTMxLjI3MiA1My4xNjk0IDEzMC40ODNDNTEuOTU3OCAxMzAuMDQ1IDUxLjI5NDYgMTI5LjYzOCA1MS4wNjMxIDEyOS4xOTFDNTAuOTEwNSAxMjguODk2IDUwLjkyNDcgMTI4LjM0OSA1MS4wOTM0IDEyOC4wMjVDNTEuMzkyOSAxMjcuNDUxIDUxLjkxNDcgMTI3LjIyMSA1Mi45MTU1IDEyNy4yMjNDNTMuNzA0MyAxMjcuMjI0IDU0LjUwOTQgMTI3LjQwNCA1NS4yNzA3IDEyNy43NUM1NS41MDY1IDEyNy44NTcgNTUuNzE4OSAxMjcuOTIyIDU1Ljc0MjcgMTI3Ljg5NkM1NS43NjY0IDEyNy44NjkgNTUuODE1MSAxMjcuNzMyIDU1Ljg1MDggMTI3LjU5M0M1NS44ODY1IDEyNy40NTMgNTYuMDE5IDEyNi45NjMgNTYuMTQ1MiAxMjYuNTAzQzU2LjI3MTQgMTI2LjA0NCA1Ni4zNzQ2IDEyNS42MzcgNTYuMzc0NiAxMjUuNTk5QzU2LjM3NDYgMTI1LjQzNCA1NS4zODM1IDEyNS4wNjcgNTQuNDQ3NyAxMjQuODg1QzUzLjcyMTMgMTI0Ljc0MyA1Mi41Mjg0IDEyNC42ODUgNTEuOTIzNyAxMjQuNzYyWk02NC43MjExIDEyNC43NjhDNjEuODk4OSAxMjUuMTQ5IDU5Ljg2NTIgMTI3LjEyMyA1OS4xNTgyIDEzMC4xNjZDNTguOTc1OCAxMzAuOTUyIDU4LjkyOTcgMTMyLjY1NSA1OS4wNjgxIDEzMy41MDNDNTkuMzQxNyAxMzUuMTc5IDYwLjEyNjkgMTM2LjYwNiA2MS4yODIyIDEzNy41MjVDNjEuNzc5NSAxMzcuOTIxIDYyLjU3MDQgMTM4LjM2IDYzLjE1MTMgMTM4LjU2M0M2NC42NzA4IDEzOS4wOTMgNjcuMTMxMSAxMzkuMTQgNjkuMTMyNCAxMzguNjc3QzY5LjczNDEgMTM4LjUzOCA3MC42NTg1IDEzOC4yNDggNzAuNzQxMSAxMzguMTcyQzcwLjc4NjQgMTM4LjEzMSA3MC4zNzQ5IDEzNS45NDMgNzAuMjk2MyAxMzUuODA4QzcwLjI4MTcgMTM1Ljc4MyA3MC4xMzQ1IDEzNS44MTYgNjkuOTY5MiAxMzUuODgxQzY5LjUwNjMgMTM2LjA2NCA2OC41MjY4IDEzNi4yNTggNjcuNjYyMiAxMzYuMzM4QzY2LjIxNjYgMTM2LjQ3MSA2NS4wMzk5IDEzNi4zMTYgNjQuMTM1NSAxMzUuODczQzYzLjYyNDUgMTM1LjYyMiA2Mi45NTYyIDEzNC45ODUgNjIuNzAzMSAxMzQuNTA4QzYyLjUxNzYgMTM0LjE1OSA2Mi4yNzc1IDEzMy4zMTcgNjIuMjc3NSAxMzMuMDE2VjEzMi44MzVINjYuODcwM0g3MS40NjMxTDcxLjUwMzEgMTMyLjUwMkM3MS41NjU4IDEzMS45NzkgNzEuNTUxMSAxMzAuNjcgNzEuNDc2NSAxMzAuMTMyQzcxLjIxNDQgMTI4LjI0NiA3MC4zODAyIDEyNi42ODYgNjkuMTQwNCAxMjUuNzY1QzY4LjY2OTMgMTI1LjQxNSA2Ny44NTYzIDEyNS4wNDYgNjcuMjIxNCAxMjQuODkzQzY2LjU5NDggMTI0Ljc0MyA2NS4zNjM4IDEyNC42ODEgNjQuNzIxMSAxMjQuNzY4Wk03OC4zNjc0IDEyNC43NDVDNzcuMDA4MiAxMjQuODY5IDc1Ljg3MjYgMTI1LjM3MSA3NS4wMzUyIDEyNi4yMkM3NC4yNTQ5IDEyNy4wMTEgNzMuODkyNyAxMjcuODk5IDczLjg5MjcgMTI5LjAyMUM3My44OTI3IDEzMC43ODIgNzUuMDMgMTMyLjAyNiA3Ny40OTc4IDEzMi45NjJDNzguOTUyNiAxMzMuNTE0IDc5LjU2MjMgMTMzLjkgNzkuNzcxNCAxMzQuNDAxQzc5Ljg3MjEgMTM0LjY0MiA3OS44ODc3IDEzNS4yOTQgNzkuNzk4NCAxMzUuNTI5Qzc5LjY4MjUgMTM1LjgzNCA3OS4yOTEgMTM2LjE5MyA3OC45MTc4IDEzNi4zMzdDNzcuOTEwOCAxMzYuNzI0IDc1Ljk5NCAxMzYuNDY0IDc0LjU2ODYgMTM1Ljc0N0M3NC4zNjQzIDEzNS42NDQgNzQuMTg5IDEzNS41NjkgNzQuMTc4OSAxMzUuNThDNzQuMTY4OCAxMzUuNTkxIDc0LjAyODEgMTM2LjEgNzMuODY2MyAxMzYuNzEyQzczLjcwNDYgMTM3LjMyNCA3My41NTY1IDEzNy44NzUgNzMuNTM3NCAxMzcuOTM2QzczLjUwOTkgMTM4LjAyNSA3My41OTg2IDEzOC4wOTQgNzMuOTY3NSAxMzguMjY3Qzc0Ljk2MjMgMTM4LjczNiA3Ni4zMDA4IDEzOSA3Ny42ODQ5IDEzOUM4MC45Njk1IDEzOSA4My4wNjMzIDEzNy40NyA4My4yMDM0IDEzNC45NjhDODMuMjY5MyAxMzMuNzg5IDgyLjkwMDEgMTMyLjgxMiA4Mi4wODU3IDEzMi4wMDlDODEuNDE4MSAxMzEuMzUxIDgwLjc1NTUgMTMwLjk4OCA3OS4wMjczIDEzMC4zMzJDNzguMjMxOCAxMzAuMDMgNzcuNjUxNSAxMjkuNjc2IDc3LjQyMjMgMTI5LjM1M0M3Ni45NzQ4IDEyOC43MjMgNzcuMjI4NiAxMjcuODA1IDc3Ljk1MjMgMTI3LjQzNUM3OC43MzM5IDEyNy4wMzYgODAuMjM4NiAxMjcuMTcgODEuNDg0NSAxMjcuNzQ5TDgxLjk5OTMgMTI3Ljk4OUw4Mi4wNjI5IDEyNy43MjdDODIuMDk3OCAxMjcuNTgzIDgyLjI0NTggMTI3LjAzNyA4Mi4zOTE3IDEyNi41MTNDODIuNjk0NyAxMjUuNDI2IDgyLjcxNDIgMTI1LjUwNSA4Mi4wODQzIDEyNS4yNjdDODAuOTY5OCAxMjQuODQ1IDc5LjUxNjcgMTI0LjY0MSA3OC4zNjc0IDEyNC43NDVaTTMyLjAwMTcgMTI5LjI3QzMyLjAwMTcgMTMxLjc0NiAzMi4wMjkzIDEzMy43OTYgMzIuMDY3NyAxMzQuMTc5QzMyLjM3NzYgMTM3LjI3MiAzNC4wNzE5IDEzOSAzNi43OTM4IDEzOUMzNy44NzM5IDEzOSAzOC45MDI5IDEzOC43MDMgMzkuNzMxMSAxMzguMTUxQzQwLjE4MzggMTM3Ljg1IDQwLjg0NjkgMTM3LjE5NCA0MS4wNTQgMTM2Ljg0M0M0MS4xMTczIDEzNi43MzYgNDEuMTg3OCAxMzYuNjQ5IDQxLjIxMDkgMTM2LjY0OUM0MS4yMzQgMTM2LjY0OSA0MS4yODkzIDEzNy4xMiA0MS4zMzM5IDEzNy42OTdMNDEuNDE0OSAxMzguNzQ2SDQyLjkzNTdINDQuNDU2NUw0NC40MTc5IDEzOC4wNjNDNDQuMzk2NyAxMzcuNjg3IDQ0LjM2MTMgMTM0LjU5OCA0NC4zMzkyIDEzMS4xOTlMNDQuMjk5MSAxMjUuMDE5SDQyLjU5MzRINDAuODg3N1YxMjkuMjk1QzQwLjg4NzcgMTMzLjg5NiA0MC44ODU3IDEzMy45MjcgNDAuNTUxOCAxMzQuNjE0QzQwLjM1NDcgMTM1LjAyIDM5LjY1OTQgMTM1LjcwMSAzOS4yMjcxIDEzNS45MTFDMzguNzE5NyAxMzYuMTU4IDM4LjEzNzUgMTM2LjI0OCAzNy42MTkgMTM2LjE1OUMzNi41MjI5IDEzNS45NzEgMzUuODg0MyAxMzUuMjY4IDM1LjYxMjcgMTMzLjk1QzM1LjUwNDIgMTMzLjQyNCAzNS40OTQyIDEzMy4wMjUgMzUuNDkzNSAxMjkuMTk3TDM1LjQ5MjYgMTI1LjAxOUgzMy43NDcySDMyLjAwMTdWMTI5LjI3Wk02Ni40MTIzIDEyNy4yNDJDNjcuNDQ5NSAxMjcuNTY2IDY4LjE0MjEgMTI4LjU3NiA2OC4yNzg2IDEyOS45NjNMNjguMzIzNiAxMzAuNDIxSDY1LjI5NDlINjIuMjY2M0w2Mi4zMDk3IDEzMC4xNUM2Mi4zODIxIDEyOS43IDYyLjY1NTEgMTI4Ljk0OSA2Mi44ODI4IDEyOC41NzRDNjMuMjY5MyAxMjcuOTM3IDYzLjkxNDEgMTI3LjQyMSA2NC41OTQyIDEyNy4yMDVDNjUuMDAwNiAxMjcuMDc2IDY1Ljk0MjMgMTI3LjA5NSA2Ni40MTIzIDEyNy4yNDJaTTIzLjA0NjggMTI3LjM0MUMyMy42MjI3IDEyNy40NzcgMjQuMDE3OSAxMjcuNzE0IDI0LjQ2MTMgMTI4LjE4OEMyNC45MDA5IDEyOC42NTkgMjUuMjU4NCAxMjkuMzQ0IDI1LjQ3NTkgMTMwLjEzNUMyNS41OTc1IDEzMC41NzYgMjUuNjE1OSAxMzAuODAyIDI1LjYxNTkgMTMxLjg1QzI1LjYxNTkgMTMyLjkgMjUuNTk3NyAxMzMuMTI0IDI1LjQ3NiAxMzMuNTYzQzI1LjA4NzYgMTM0Ljk2NSAyNC4yNzQ0IDEzNS45ODYgMjMuMjcyMiAxMzYuMzMyQzIxLjc3OTggMTM2Ljg0NiAyMC4yNDM4IDEzNi4xMzUgMTkuNDk0OSAxMzQuNTg0QzE4LjY0MDUgMTMyLjgxNCAxOC43NzEgMTMwLjE2NiAxOS43ODc4IDEyOC42MzVDMjAuNTI1NiAxMjcuNTIzIDIxLjc1NCAxMjcuMDM2IDIzLjA0NjggMTI3LjM0MVoiIGZpbGw9IiNFMkUyRTIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy4xMzU4IDc4Ljg3NTlDMTIuNzM4NSA4My4yNTA2IDkuMTQwNjIgODYuODQzIDkuMTQwNjIgODYuODU5MUM5LjE0MDYyIDg2Ljg3NTMgMTIuMTIzOSA4Ni44ODg1IDE1Ljc3IDg2Ljg4ODVIMjIuMzk5NEwyMy40NTA4IDg1Ljg0NjlDMjQuMDI5MiA4NS4yNzQxIDI0LjUxODggODQuODA1NCAyNC41MzkxIDg0LjgwNTRDMjQuNTU5MyA4NC44MDU0IDI0Ljc2ODQgODQuOTM0MSAyNS4wMDM3IDg1LjA5MTRDMjcuNDg2MyA4Ni43NTA4IDMyLjQ2MSA4Ny40ODM5IDM5LjgwNTEgODcuMjcyNUM0OC45NjE0IDg3LjAwOSA1NS4wMDc5IDg1LjU3MDIgNTkuMTg0NyA4Mi42NjA5QzU5LjgyMTIgODIuMjE3NiA2MC4wOCA4MS45Njc3IDY3LjA0NDggNzUuMDcwOUw3MS4yMzM2IDcwLjkyM0w2NC40NTkyIDcwLjkyMDVMNTcuNjg0NyA3MC45MThMNTIuNjE2OSA3NS45NTUyQzQ3LjEyMDQgODEuNDE4NCA0Ny4wNjI2IDgxLjQ3MDEgNDUuNzEyNSA4Mi4xMjY1QzQ0LjY1NjQgODIuNjM5OSA0My42NDc3IDgyLjk2NjIgNDIuMzI0NCA4My4yMjI1QzM4Ljg3NzUgODMuODkwMSAzMy4wMzI1IDgzLjg3NCAzMC42NDA0IDgzLjE5MDNDMjkuNzExOSA4Mi45MjUgMjkuMDk5OSA4Mi41Mzk1IDI4Ljg1MzYgODIuMDY0OEMyOC43Mjc0IDgxLjgyMTUgMjguNzMwNyA4MS4zMTkyIDI4Ljg2MDcgODAuOTY0QzI5LjEyMTUgODAuMjUxNSAyOS40NjM2IDc5Ljg3NzIgMzMuOTg5NSA3NS4zNTI1TDM4LjQyNTIgNzAuOTE4TDMxLjc3ODEgNzAuOTJMMjUuMTMwOSA3MC45MjJMMTcuMTM1OCA3OC44NzU5WiIgZmlsbD0iI0UyRTJFMiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1LjIxNTMgMzQuNTEzNlY2OS4wMjcySDMxLjg4ODhIMzguNTYyM1Y1NS42NTQzQzM4LjU2MjMgNDQuMTEzMSAzOC41NzU4IDQyLjExMjkgMzguNjYxMyA0MS4wNTEyQzM5LjE5MDkgMzQuNDc0MiA0MS42OTMgMzAuOTM2IDQ2LjQ3NTIgMzAuMDAxN0M0Ny41MDEgMjkuODAxMyA0OC45NTYyIDI5LjcyMDQgNTAuMDgzNyAyOS44MDExQzUzLjM5IDMwLjAzNzUgNTUuNDI3IDMxLjE5NDggNTYuNTc2NyAzMy40OUM1Ni45NDY3IDM0LjIyODggNTcuMTM4MiAzNC43ODI1IDU3LjMzNyAzNS42ODk1QzU3LjczNyAzNy41MTQzIDU3LjcxNDkgMzYuNTMwMyA1Ny43Mzg3IDUzLjUzNDJMNTcuNzYwNSA2OS4wMjcySDY0LjQ5NjlINzEuMjMzNUw3MS4yMTIyIDUxLjY5MUM3MS4xODkxIDMyLjg2OTEgNzEuMjEwNyAzNC4wNTAyIDcwLjg1MDYgMzEuODk3OEM2OS41MDg1IDIzLjg3NjEgNjQuNjI0NiAxOS40OTQ3IDU2LjI2OTYgMTguODE3QzU1LjIyMDkgMTguNzMxOSA1Mi45MDgzIDE4LjczMTQgNTIuMDA0NiAxOC44MTYxQzQ4LjExMjQgMTkuMTgwOSA0NS4xNDEgMjAuMzMwMyA0Mi4zMDQgMjIuNTY4NkM0MS40NTk5IDIzLjIzNDYgMzkuOTcwMSAyNC43MzUxIDM5LjE5NjcgMjUuNjk4MUwzOC41OTQxIDI2LjQ0ODVMMzguNTc4MSAxMy4yMjQyTDM4LjU2MiAwSDMxLjg4ODdIMjUuMjE1M1YzNC41MTM2WiIgZmlsbD0iI0UyRTJFMiIvPgo8L3N2Zz4K")',
            backgroundPosition: 'right bottom',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            display: 'block',
            position: 'relative',
            height: '7vw',
            width: '100%',
            marginBottom: '1.2vw',
          },
        },
      },
      '@media (min-width:1921px)': {
        top: 'calc(-100vh + 3.5vw + 4.2vw + 2.6vw)',
      },
    },
  },
  imageSlider: {
    position: 'relative',
    height: '100vh',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  descBlock: {
    width: '100%',
    padding: '0 10%',
    marginTop: '80px',
    pointerEvents: 'none',
    [theme.breakpoints.down('md')]: {
      marginTop: '30px',
      marginLeft: '0',
    },
    '@media (min-width:1921px)': {
      //marginTop: '4.2vw',
    },
  },
  descBlockContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingLeft: '100px',
    '& > * + * ': {
      marginTop: '1em',
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: '0',
    },
    '@media (min-width:1921px)': {
      paddingLeft: '5.2vw',
      '& > * + * ': {
        marginTop: '32px',
      },
    },
  },
  h2_gap: {
    marginBottom: '40px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '20px',
    },
  },
  descTitle: {
    fontSize: '38px',
    fontWeight: '600',
    textTransform: 'none',
    '@media (min-width:1921px)': {
      fontSize: '2vw',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
    },
  },

  inviteTitleBox: {
    marginTop: '30px',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      marginTop: '0',
    },
    '& h4': {
      marginBottom: '1em',
      fontWeight: '600',
      color: '#454545',
    },
  },
  subtitleBox: {
    width: '100%',
    marginTop: '30px',
    '& p': {
      fontSize: '14px',
    },
    '@media (min-width:1921px)': {
      width: '100%',
      '& p': {
        fontSize: '0.72vw',
      },
    },
  },
  priceBlock: {
    display: 'flex',
    marginTop: '40px',
    '@media (min-width:1921px)': {
      marginTop: '2.1vw',
    },
  },
  priceBlockText: {
    fontSize: '48px',
    '@media (min-width:1921px)': {
      marginTop: '0',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '42px',
    },
  },
  iconsBlockConteiner: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(3, 33%)',
    rowGap: '30px',
    columnGap: '20px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)',
      marginTop: '40px',
    },
  },
  iconBox: {
    display: 'flex',
    flexDirection: 'column',
    '& p>span': {
      fontSize: '14px',
      display: 'block',
      '@media (min-width:1921px)': {
        fontSize: '0.73vw',
      },
    },
    '& > * + * ': {
      marginTop: '10px',
      lineHeight: '1.3',
      fontWeight: '600',
      '& > span': {
        fontWeight: '400',
      },
    },
    '@media (min-width:1921px)': {
      '& > * + * ': {
        marginTop: '0.72vw',
      },
    },
  },
  icon: {
    width: '60px',
    height: '60px',
    '@media (min-width:1921px)': {
      width: '3.2vw',
      height: '3.2vw',
    },
  },

  imgBox: {
    width: '100%',
    objectFit: 'cover',
    height: '520px',
    '@media (min-width:1921px)': {
      height: '24vw',
    },
  },
  sliderBox: {
    height: '520px',
    width: '100%',
    '@media (min-width:1921px)': {
      height: '24vw',
    },
    '& .swiper-slide': {
      cursor: 'pointer',
    },
    '& img': {
      pointerEvents: 'visible',
    },
  },
  mapBox: {
    width: '100%',
    height: '560px',
    marginTop: '100px',
    borderTop: '1px solid #bdbdbd',
    borderBottom: '1px solid #bdbdbd',
    backgroundPosition: '40% 0%!important',
    '&>div': {
      marginTop: '0',
      height: '100%',
      position: 'relative',
      [theme.breakpoints.down('md')]: {
        backgroundImage: 'none',
        // top: 'calc(50vw - 150vh)',
      },
    },
    '&>div>div': {
      paddingTop: '60px',
      position: 'relative',
      '@media (min-width:1921px)': {
        paddingTop: '3.1vw',
      },
    },
    '&>div>div>div': {
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column',
      },
    },
    '&>div:before': {
      /*content: `''`,
      position: 'absolute',
      width: '31vw',
      height: '100%',
      background: '#E6E6E6',
      opacity: '0.6',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },*/
    },
    '@media (min-width:1921px)': {
      height: '29vw',
      marginTop: '4.2vw',
    },
    // marginTop: 'calc(-50vw + 150vh)',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      marginTop: '20px',
      marginBottom: '0',
      order: '1',
      backgroundPosition: '50%!important',
      borderTop: 'none',
      borderBottom: 'none',
      // height:'100vw',
    },
  },
  mapTextBox: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& > * + * ': {
      marginTop: '20px',
    },
  },
  mapImg: {
    height: '40vh',
    margin: '0 -10vw',
    marginTop: '40px',
    objectFit: 'cover',
    objectPosition: '64%',
    borderTop: '1px solid #bdbdbd',
    borderBottom: '1px solid #bdbdbd',
  },
  mapCoordinates: {
    '& p': {
      fontWeight: '700',
    },
  },
  locationIcon: {
    width: '16px',
    marginBottom: '-1px',
    marginRight: '4px',
    '@media (min-width:1921px)': {
      width: '0.7vw',
    },
  },
  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    // height:'100%',
    '& > * + * ': {
      marginTop: '1em',
    },
  },
  instaBox: {
    marginTop: 'auto',
    '& > *': {
      [theme.breakpoints.down('md')]: {
        /*display: 'none',*/
      },
    },
    '& > div': {
      [theme.breakpoints.down('md')]: {
        /*display: 'none',*/
      },
    },
  },
  instaContent: {
    display: 'flex',
    marginTop: '20px',
    '& a': {
      display: 'flex',
      textDecoration: 'none',
    },
    '& svg': {
      margin: 'auto',
    },
    '@media (min-width:1921px)': {
      marginTop: '1.04vw',
    },
  },
  instaText: {
    marginTop: '20px',
    width: '250px',
    fontSize: '14px',
    '@media (min-width:1921px)': {
      marginTop: '1.04vw',
      width: '14vw',
      fontSize: '0.72vw',
    },
  },
  instaName: {
    marginLeft: '16px',
    fontWeight: '700',
    textTransform: 'uppercase',
    '@media (min-width:1921px)': {
      marginLeft: '0.8vw',
    },
  },

  videoBox: {
    marginTop: '0',
    position: 'relative',
    cursor: 'pointer',
    '@media (min-width:1921px)': {
      marginLeft: '4.2vw',
    },
    '@media (max-width:600px)': {
      marginTop: '40px',
    },
  },
  playButton: {
    width: '90px',
    height: '90px',
    cursor: 'pointer',
    position: 'absolute',
    zIndex: '2',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    '@media (min-width:1921px)': {
      width: '4.7vw',
      height: '4.7vw',
    },
  },
  playButtonActive: {
    transform: 'translate(-50%,-50%)',
    '& img': {
      animation: 'play 0.3s ease-in-out',
      opacity: '0',
    },
    pointerEvents: 'none',
  },
  instaBox2: {
    marginBottom: '60px',
    marginTop: 'auto',
    '@media (min-width:1280px)': {
      // display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: '0',
      '& > div > *': {
        // display: 'block!important',
      },
      '& > div > div': {
        // display: 'block!important',
      },
      '& svg': {
        margin: '4px 0',
      },
    },
  },
  housesBox: {
    width: '100%',
    '&>div>div': {
      marginTop: '15px',
      '@media (min-width:1921px)': {
        marginTop: '1vw',
      },
    },
  },
  formSection: {
    '& > section > div': {},
  },
  houeseGroupsConteiner: {
    //width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: '-1.5vw',
    marginRight: '-1.5vw',
    //gridTemplateColumns: '1fr 1fr',
    //columnGap: 'max(50px,0.2vw)',
    [theme.breakpoints.down('md')]: {
      //gridTemplateColumns: '1fr',
      //rowGap: 'max(50px,0.2vw)',
      flexDirection: 'column',
      margin: '-25px 0',
      width: '100%',
      '&>div': {
        padding: '25px 0',
        width: '100%',
        flexBasis: '100%',
      },
    },
    '&>div': {
      paddingLeft: '1.5vw',
      paddingRight: '1.5vw',
      width: '50%',
      flexBasis: '50%',
      marginBottom: '100px',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      flexBasis: '100%',
      },
    },
    '&>div>div': {
      height: '100%',
      display: 'flex',
      alignItems: 'stretch',
      flexDirection: 'column',
      [theme.breakpoints.down('md')]: {
        padding:'0 10%',
      },
      '@media (max-width:450px)': {
        padding:'0 5%',
      },
    },
    '&>div>div>h2+img': {
      '@media (max-width:960px)': {
        maxWidth: '120%',
        marginLeft: '-10%',
        marginRight: '-10%',
        width: '120%',
      },
    },
  },
  contactConteiner: {
    display: 'block',
    alignItems: 'center',
    marginTop: '6vh',
  },
  contactText: {
    fontWeight: '600',
    /*marginLeft: '1.5vh',*/
    color: '#4f4f4f',
    marginTop: '0.2em',
  },
}));

const Watch = ({ data, lang }) => {
  const breakpoints = useBreakpoint();
  const [openModal, setOpenModal] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  const classes = useStyles();
  let pageDataObj = useMemo(
    () => ({
      EN: getData(data.allMysqlArendaEn.nodes),
      RU: getData(data.allMysqlArenda.nodes),
    }),
    [data]
  );
  const pageData = lang === 'EN' ? pageDataObj['EN'] : pageDataObj['RU'];
  const handleSliderClick = (e) => {
    if (e.target.dataset.number && !breakpoints.s) {
      setActiveImg(e.target.key);
      setOpenModal(true);
      setOpenPopup(true);
      setActiveImg(+e.target.dataset.number);
    }
  };
  const video = useRef(null);
  const handlePlayButton = () => {
    if (!isPlay) {
      video.current.play();
      setIsPlay(true);
    } else {
      video.current.pause();
      setIsPlay(false);
    }
  };
  const ancorLink = useRef(null);

  return (
    <Box components='main' className={classes.BlockFullscreen}>
      <Box className={classes.herobox}>
        <FullScreenHouseSlider
          title={pageData.arenda_title}
          arr={pageData.arenda_gallery.filter((item) => item.published)}
          data={data}
          middleIcon={true}
          pagination={true}
          enabled={false}
          oneButton={true}
          ancorLink={ancorLink}
          lang={lang}
        ></FullScreenHouseSlider>
      </Box>

      <Box className={classes.descBlock}>
        <Box className={classes.descBlockContent}>
          <Typography className={classes.h2_gap} variant='h2'>
            {pageData.arenda_subtitle}
          </Typography>
          {pageData.arenda_text ? splitText(pageData.arenda_text) : null}
        </Box>
      </Box>

      <ContentBlock
        mobileFullScreen={true}
        leftColumnContent={
          <Box className={classes.sliderBox} onClick={handleSliderClick}>
            <ModalScreen
              openModal={openModal}
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
              setOpenModal={setOpenModal}
            >
              <FullScreenHouseSlider
                arr={pageData.arenda_mini_gallery.filter(
                  (item) => item.published
                )}
                data={data}
                fullHeight={false}
                autoSlidesPerView={false}
                mobileButtons={false}
                sidesDesctopButtons={true}
                initialSlide={activeImg}
                lang={lang}
              ></FullScreenHouseSlider>
            </ModalScreen>
            <FullScreenHouseSlider
              arr={pageData.arenda_mini_gallery.filter(
                (item) => item.published
              )}
              data={data}
              fullHeight={false}
              autoSlidesPerView={true}
              mobileButtons={true}
              sidesDesctopButtons={true}
              outSideButtons={true}
              lang={lang}
            ></FullScreenHouseSlider>
          </Box>
        }
      ></ContentBlock>

      <ContentBlock
        onlyLine={true}
        mobileFullScreen={true}
        leftColumnContent={
          <Box className={classes.houeseGroupsConteiner}>
            {pageData?.arenda_houses_group?.map((group) => {
              return (
                <Box ref={ancorLink} key={group.MIGX_id}>
                  <HousesGroup
                    lang={lang}
                    data={data}
                    groupName={group?.houses_group_name}
                    groupDesc={group?.houses_group_desc}
                    groupImage={group?.houses_group_image}
                    houses={group?.houses_group_list.filter(
                      (house) => house.published
                    )}
                    calendar={pageData.arenda_houses}
                  ></HousesGroup>
                </Box>
              );
            })}
          </Box>
        }
      ></ContentBlock>

      <ContentBlock
        title={pageData.arenda_icon_title}
        leftColumnContent={
          <>
            {pageData.arenda_icon_text ? (
              <Box className={classes.textBlock}>
                {pageData.arenda_icon_text
                  ? splitText(pageData.arenda_icon_text)
                  : null}
              </Box>
                ) : null}

            <Box className={classes.contactConteiner}>
              {/*<Phone />*/}
              <Typography
                className={classes.contactTtile}
                variant='body1'
                component='p'
              >
                {lang === 'EN' ? 'For any questions call:' : 'По любым вопросам набирайте:'}
              </Typography>
              <Typography
                className={classes.contactText}
                variant='h4'
                component='p'
              >
                +375 33 914 79 48
              </Typography>
            </Box>
          </>
        }
        rightColumnContent={
          <Box className={classes.iconsBlockConteiner}>
            {pageData.arenda_icon_gallery.map((item, index) => (
              <Box className={classes.iconBox} key={index}>
                <img
                  className={classes.icon}
                  src={getPublicPath(data, item.image)}
                  alt='icon'
                />
                <Typography
                  variant='body1'
                  dangerouslySetInnerHTML={{
                    __html: `${validateText(item.name)}`,
                  }}
                ></Typography>
              </Box>
            ))}
          </Box>
        }
      ></ContentBlock>

      <Box
        component='section'
        className={classes.mapBox}
        style={
          breakpoints.md
            ? null
            : {
                background: `no-repeat url(${getPublicPath(
                  data,
                  pageData.arenda_map
                )})`,
                backgroundSize: `cover`,
              }
        }
      >
        <ContentBlock
          component='div'
          title={pageData.arenda_map_title}
          leftColumnContent={
            <>
              <Box className={classes.mapTextBox}>
                {pageData.arenda_map_text1 ? (
                  <Box className={classes.textBlock}>
                    <Typography variant='body1'>
                      {pageData.arenda_map_text1}
                    </Typography>
                  </Box>
                ) : null}

                {pageData.arenda_map_coordinate ? (
                  <Box className={classes.mapCoordinates}>
                    <Typography variant='body1'>
                      <img
                        className={classes.locationIcon}
                        src={location}
                        alt='location'
                      ></img>{' '}
                      {pageData.arenda_map_coordinate}
                    </Typography>
                  </Box>
                ) : null}

                <Box component='div' className={classes.instaBox2}>
                  <Box className={classes.instaBox}>
                    <Typography variant='body1' className={classes.instaText}>
                      {lang === 'EN'
                        ? 'More about our location on Instagram:'
                        : 'Больше про нашу локацию в сети Instagram:'}
                    </Typography>
                    <Box className={classes.instaContent}>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        className={classes.Link}
                        href={pageData.arenda_insta_url}
                      >
                        <Instagram
                          width={breakpoints.xxl ? '0.9vw' : 14}
                          height={breakpoints.xxl ? '0.9vw' : 14}
                        />
                        <Typography
                          variant='body1'
                          className={classes.instaName}
                        >
                          {pageData.arenda_insta_title}
                        </Typography>
                      </a>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {breakpoints.md ? (
                <img
                  className={classes.mapImg}
                  src={getPublicPath(data, pageData.arenda_map)}
                  alt='map'
                />
              ) : null}
            </>
          }
          rightColumnContent={breakpoints.md ? null : <></>}
        ></ContentBlock>
      </Box>

      {pageData.arenda_video ? (
        <Box
          component='section'
          className={classes.videoBox}
          onClick={handlePlayButton}
        >
          <Box
            className={
              isPlay
                ? `${classes.playButton} ${classes.playButtonActive}`
                : classes.playButton
            }
            onClick={handlePlayButton}
          >
            <img src={playButton} alt='play button' />
          </Box>
          <video width='100%' height='100%' muted loop ref={video}>
            <source
              src={getPublicPath(data, pageData.arenda_video)}
              type='video/mp4'
            />
          </video>
        </Box>
      ) : null}
    </Box>
  );
};
export default Watch;
