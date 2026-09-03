export const fetchDuLieu = async () => {
    try {
        const response = await fetch('/data.json');
        if (!response.ok) throw new Error('Lỗi kết nối máy chủ');
        return await response.json();
    } catch (error) {
        throw new Error('Không thể tải dữ liệu.');
    }
};