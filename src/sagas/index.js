// import { takeEvery, delay } from 'redux-saga'
// import { call, put } from 'redux-saga/effects'


// import { CHECK_APP } from 'constants/actionTypes'


// export function* rootSaga() {
// 	yield [
// 		initSaga(),
// 		checkAppSaga(),
// 		sagaTest()
// 	]
// }

// // - - - - - - - - - - - - - - - - - - - - - - - - - - -

// export function* initSaga() {
// 	// yield console.debug('hello, my name is SAGA!');
// 	// yield console.debug('Just click on PING-PONG button');
// }

// function* sagaTest() {
// 	yield put({ type: CHECK_APP, message: 'YO' })
// }

// export function* checkAppSaga() {
// 	yield* takeEvery(CHECK_APP, helloSaga)
// }

// function* helloSaga() {
// 	const timeoutMs = 2000

// 	// yield console.log('Hello from Saga!', Date.now())
// 	yield call(delay, timeoutMs)
// 	// yield console.log(`Hello from Saga after ${timeoutMs} ms!`, Date.now())
// 	// yield console.log('---------------------------------------------');
// }
