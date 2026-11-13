
const STORAGE_KEY = "afterDarkRedeemed";

const StorageManager = {

    getRedeemed() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error("Could not read redeemed experiences:", error);
            return [];
        }
    },

    isRedeemed(experienceId) {
        return this.getRedeemed().includes(Number(experienceId));
    },

    redeem(experienceId) {
        const id = Number(experienceId);

        if (!Number.isInteger(id) || id < 1 || id > 25) {
            return false;
        }

        const redeemed = this.getRedeemed();

        if (redeemed.includes(id)) {
            return false;
        }

        redeemed.push(id);

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(redeemed));
            return true;
        } catch (error) {
            console.error("Could not save redemption:", error);
            return false;
        }
    },

    getRemainingCount() {
        return 25 - this.getRedeemed().length;
    },

    resetAll() {
        localStorage.removeItem(STORAGE_KEY);
    }
};
