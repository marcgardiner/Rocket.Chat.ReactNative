import * as types from '../constants/types';
import { APP } from './actionsTypes';

export function appStart(root) {
	return {
		type: APP.START,
		root
	};
}

export function appReady() {
	return {
		type: APP.READY
	};
}

export function appInit() {
	return {
		type: APP.INIT
	};
}

export function setStackRoot(stackRoot) {
	return {
		type: APP.SET_STACK_ROOT,
		stackRoot
	};
}

export function setCurrentServer(server) {
	return {
		type: types.SET_CURRENT_SERVER,
		payload: server
	};
}

export function addSettings(settings) {
	return {
		type: types.ADD_SETTINGS,
		payload: settings
	};
}
export function setAllSettings(settings) {
	return {
		type: types.SET_ALL_SETTINGS,
		payload: settings
	};
}

export function setCustomEmojis(emojis) {
	return {
		type: types.SET_CUSTOM_EMOJIS,
		payload: emojis
	};
}

export function login() {
	return {
		type: 'LOGIN'
	};
}
