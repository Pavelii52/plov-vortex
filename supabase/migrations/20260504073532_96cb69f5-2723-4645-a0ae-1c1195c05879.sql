
REVOKE EXECUTE ON FUNCTION public.count_user_video_generations_24h(UUID) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.count_user_video_generations_24h(UUID) TO service_role;
